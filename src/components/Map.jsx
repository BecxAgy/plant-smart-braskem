import React, { useState, useMemo } from 'react'
import ReactMapGl, { Layer, Marker, Overlay } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { DefaultSidebar } from './SidebarInformation'
import { useSelector } from 'react-redux'
import DialogDefault from './ModalIntervention'
import mapPoint from '../images/MarkerMap.png'
import { ImArrowDown } from 'react-icons/im'
import pointGreen from '../images/Circle_Green.png'
import pointGray from '../images/Circle_Gray.png'
import pointRed from '../images/Circle_Red.png'
import pointYellow from '../images/Circle_Yellow.png'
import compassRose from '../images/Logo_Kmp.svg'
import north from '../images/north_project.png'
import layer from   '../images/Layer_Mapa.svg'
import { Avatar, IconButton, Tooltip } from '@material-tailwind/react'
import { Fa500Px } from 'react-icons/fa'

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map() {
    const { interventions } = useSelector(state => state.intervention)
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = useState('')
    const [intervention, setIntervention] = useState(null)
    const [selectedColor, setSelectedColor] = useState('')
    const [showOverlay, setShowOverlay] = useState(true)
    const [selectedProject, setSelectedProject] = useState('') // Estado para o projeto selecionado
    const interventionsFiltered = useMemo(() => {
        const lowerSearch = search.toLowerCase()

        return interventions.filter(
            interv =>
                interv.tag.toLowerCase().includes(lowerSearch) &&
                (selectedProject === '' || interv.PJ === selectedProject) &&
                (selectedColor === '' || selectedColor === interv.alerta), // Filtro com base no projeto selecionado
        )
    }, [interventions, search, selectedProject, selectedColor])

    const [viewState, setViewState] = React.useState({
        longitude: -38.31978,
        latitude: -12.65830,
        pitch: 35,
        bearing: 261.5,

        zoom: 16.6,
        
    })
    const handleOpen = () => setOpen(!open)

    return (
        <div className='relative z-1'>
            <ReactMapGl
                {...viewState}
                mapboxAccessToken={TOKEN}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle={
                    'mapbox://styles/rebecaaguiar/clmoulsa604qe01qb3r6k01sj'
                }
            >
                <div className='w-full sm:w-1/2'>
                    <div className='sm:flex p-10'>
                        <div className='sm:w-2/4'>
                            <DefaultSidebar
                                interventionsFiltered={interventionsFiltered}
                                open={open}
                                setOpen={setOpen}
                                setIntervention={setIntervention}
                                setSelectedColor={setSelectedColor}
                                selectedProject={selectedProject}
                                setSelectedProject={setSelectedProject}
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>
                        <div className='sm:w-1/3 px-5'>
                            <DialogDefault
                                setopen={setOpen}
                                open={open}
                                intervention={intervention}
                            />
                        </div>
                    </div>
                </div>
                
                    
                    <Marker  
                     pitchAlignment='map'
                     rotationAlignment='map'
                     rotation={-8}
                        longitude={-38.320879}
                                latitude={-12.658064}
                                
                                >
                        <img src={layer} className=''/> 
                    </Marker>
                
                {interventions &&
                    interventionsFiltered.map(marker => (
                        <Marker
                            pitchAlignment='map'
                            rotationAlignment='viewport'
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            onClick={() => {
                                setIntervention(marker)
                                handleOpen()
                            }}
                        >
                            {open && marker === intervention ? (
                                <ImArrowDown
                                    color='yellow'
                                    className='w-5 h-5  '
                                />
                            ) : (
                                <></>
                            )}

                            <img
                                key={marker.id}
                                className='w-5  h-5 hover:h-7 hover:w-8 cursor-pointer '
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

                {/* Image Overlay
                <div className='absolute inset-0 pointer-events-none z-0'>
                    <img
                        src={maplayer}
                        alt='Map Layer'
                        className='w-full h-full'
                    />
                </div> */}

                {/* Show/hide overlay button */}
                <div
                    className={`absolute p-2 right-5 bottom-6`}
                >
                    
                    <Avatar src={compassRose} size='lg'   />
                    
                   
                </div>
            </ReactMapGl>
        </div>
    )
}

export default Map
