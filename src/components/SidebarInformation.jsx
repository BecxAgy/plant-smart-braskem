import { Input, List } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InterventionItemList from './InterventionItemList'
import logoBraskem from '../images/logoBraskem.png'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import SelectProject from './SelectProject'
import GroupColorFilter from './GroupColorFilter'

export function DefaultSidebar({ markerData, open, setOpen, setIntervention }) {
    const [search, setSearch] = useState('')
    const { interventions, loading } = useSelector(state => state.intervention)

    const [selectedProject, setSelectedProject] = useState('') // Estado para o projeto selecionado
    const [selectedColor, setSelectedColor] = useState('')
    const interventionsFiltered = useMemo(() => {
        const lowerSearch = search.toLowerCase()

        return interventions.filter(
            interv =>
                interv.tag.toLowerCase().includes(lowerSearch) &&
                (selectedProject === '' || interv.PJ === selectedProject) &&
                (selectedColor === '' || selectedColor === interv.alerta), // Filtro com base no projeto selecionado
        )
    }, [interventions, search, selectedProject, selectedColor])

    return (
        <div
            className={`p-5 rounded-lg absolute top-0 left-0 w-1/4 ${
                open ? 'hidden md:block' : ''
            }`}
        >
            <div
                className='bg-white rounded-2xl p-10 '
                style={{ height: '95vh', minWidth: '17rem' }}
            >
                <div>
                    <img src={logoBraskem} width={180} alt='' />

                    <GroupColorFilter setSelectedColor={setSelectedColor} />
                    <div className='w-32 my-2'>
                        <SelectProject
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                        />
                    </div>

                    <Input
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value)
                            console.log(search)
                        }}
                        className=' bg-blue-gray-900 rounded-xl '
                        type='search'
                        color='blue'
                        label='Tag Name'
                        icon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
                    />
                </div>

                <List
                    className='scrollbar-thin  scrollbar-thumb-black scrollbar-track-transparent overflow-y-auto my-5'
                    style={{ maxHeight: '60vh' }}
                >
                    {markerData &&
                        interventionsFiltered.map(marker => (
                            <InterventionItemList
                                key={marker.id}
                                intervention={marker}
                                onClick={() => {
                                    console.log('entrou')
                                    setOpen(!open)
                                    setIntervention(marker)
                                }}
                            />
                        ))}
                </List>
            </div>
        </div>
    )
}
