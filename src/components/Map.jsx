import React, { useState, useMemo } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { DefaultSidebar } from './SidebarInformation'
import { useSelector } from 'react-redux'
import DialogDefault from './ModalIntervention'
import pointGreen from '../images/Circle_Green.png'
import pointGray from '../images/Circle_Gray.png'
import pointRed from '../images/Circle_Red.png'
import pointYellow from '../images/Circle_Yellow.png'
import compassRose from '../images/Logo_Kmp.svg'
import arrow from '../images/Vetor_Seta.svg'
import layer from '../images/Layer_Mapa.svg'
import { Avatar, Badge } from '@material-tailwind/react'
import CardGeralInformation from './CardGeralInformation'

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map() {
    const { interventions } = useSelector(state => state.intervention)
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = useState('')
    const [searchTag, setSearchTag] = useState('')
    const [intervention, setIntervention] = useState(null)
    const [openSidebar, setOpenSidebar] = useState(true)
    const [openCard, setOpenCard] = useState(true)
    const [openProjects, setOpenProjects] = useState(true)
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedProject, setSelectedProject] = useState('') // Estado para o projeto selecionado
    const interventionsFiltered = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        const lowerSearchTag = searchTag.toLowerCase()

        return interventions.filter(
            interv =>
                interv.tag.toLowerCase().includes(lowerSearch) &&
                interv.emperesa_montagem
                    .toLowerCase()
                    .includes(lowerSearchTag) &&
                (selectedProject === '' || interv.PJ === selectedProject) &&
                (selectedColor === '' || selectedColor === interv.alerta), // Filtro com base no projeto selecionado
        )
    }, [interventions, search, selectedProject, selectedColor, searchTag])

    const [viewState, setViewState] = React.useState({
        longitude: -38.31978,
        latitude: -12.6583,
        pitch: 35,
        bearing: 261.5,
        zoom: 16.3,
    })
    const handleOpen = () => setOpen(!open)

    return (
        <div className='relative '>
            <ReactMapGl
                {...viewState}
                mapboxAccessToken={TOKEN}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle={
                    'mapbox://styles/rebecaaguiar/clmoulsa604qe01qb3r6k01sj'
                }
            >
                <div className='grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-3 p-10'>
                    <div className=''>
                        <DefaultSidebar
                            openSidebar={openSidebar}
                            setOpenSidebar={setOpenSidebar}
                            interventionsFiltered={interventionsFiltered}
                            open={open}
                            setOpen={setOpen}
                            setIntervention={setIntervention}
                            setSelectedColor={setSelectedColor}
                            selectedProject={selectedProject}
                            setSelectedProject={setSelectedProject}
                            search={search}
                            setSearch={setSearch}
                            searchTag={searchTag}
                            setSearchTag={setSearchTag}
                        />
                    </div>
                    <div className=''>
                        <DialogDefault
                            setopen={setOpen}
                            open={open}
                            intervention={intervention}
                        />
                    </div>
                    <div className='absolute right-5 sm:hidden'>
                        <div className='flex flex-rows-2  gap-5'>
                            {/* <a
                                href='https://jpnor-my.sharepoint.com/:b:/g/personal/mateus_almeida_kempetro_com_br/ESugvqnLrbRJjWVulXHEjW8B2tJ3AA5CGPcfKA_VJcDDLA?e=5Y38xt'
                                target='_blank'
                                className='p-2 font-bold hover:p-3'
                            >
                                <Badge
                                    content='HELP!'
                                    className='font-bold p-2 hover:p-3'
                                ></Badge>
                            </a> */}
                            <CardGeralInformation
                                openSidebar={openSidebar}
                                openCard={openCard}
                                setOpenCard={setOpenCard}
                                setOpenProjects={setOpenProjects}
                                openProjects={openProjects}
                            />
                        </div>
                    </div>
                </div>

                {interventions &&
                    interventionsFiltered.map(marker => (
                        <Marker
                            style={{ zIndex: 90 }}
                            pitchAlignment='map'
                            rotationAlignment='viewport'
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            onClick={() => {
                                console.log('rapaz')
                                setIntervention(marker)
                                handleOpen()
                            }}
                        >
                            <img
                                key={marker.id}
                                className='w-5 h-5 hover:h-7 hover:w-8 cursor-pointer'
                                src={
                                    marker.alerta === 'green'
                                        ? pointGreen
                                        : marker.alerta === 'gray'
                                        ? pointGray
                                        : marker.alerta === 'red'
                                        ? pointRed
                                        : pointYellow
                                }
                            />
                        </Marker>
                    ))}

                <Marker
                    pitchAlignment='map'
                    rotationAlignment='map'
                    rotation={-8}
                    longitude={-38.320879}
                    latitude={-12.658064}
                >
                    <img src={layer} className='' />
                </Marker>

                {/* Render the clicked marker conditionally when open is true */}
                {open && intervention && (
                    <Marker
                        pitchAlignment='map'
                        rotationAlignment='viewport'
                        longitude={intervention.longitude - 0.00016}
                        latitude={intervention.latitude - 0.000025}
                    >
                        <img src={arrow} alt='arrow' className='w-8 h-8' />
                    </Marker>
                )}

                {/* Show/hide overlay button */}
                <div className={`absolute p-2 right-5 bottom-2`}>
                    <Avatar src={compassRose} />

                    <p className='text-center text-white italic'>v1.271023</p>
                </div>
            </ReactMapGl>
        </div>
    )
}

export default Map
