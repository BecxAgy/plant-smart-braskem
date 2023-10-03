import { Input, List } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InterventionItemList from './InterventionItemList'
import logoBraskem from '../images/logoBraskem.png'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import SelectProject from './SelectProject'
import GroupColorFilter from './GroupColorFilter'

export function DefaultSidebar({
    open,
    setOpen,
    setIntervention,
    setSelectedColor,
    selectedProject,
    setSelectedProject,
    interventionsFiltered,
    search,
    setSearch,
}) {
    const { interventions } = useSelector(state => state.intervention)
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
                    {interventions &&
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
