import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
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
const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map() {
    const { interventions } = useSelector(state => state.intervention)
    const [open, setOpen] = React.useState(false)
    const [intervention, setIntervention] = useState(null)
    const [viewState, setViewState] = React.useState({
        longitude: -38.31955,
        latitude: -12.65735,
        zoom: 17.4,

        pitch: 49,
        bearing: 144,
    })
    const handleOpen = () => setOpen(!open)

    return (
        <div className='z-1'>
            <ReactMapGl
                {...viewState}
                mapboxAccessToken={TOKEN}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle={
                    'mapbox://styles/rebecaaguiar/clmoulsa604qe01qb3r6k01sj'
                }
            >
                <div className='w-full sm:w-1/2 z-10'>
                    <div className='sm:flex p-10'>
                        <div className='sm:w-2/4'>
                            <DefaultSidebar
                                markerData={interventions}
                                open={open}
                                setOpen={setOpen}
                                setIntervention={setIntervention}
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

                {interventions &&
                    interventions.map(marker => (
                        <Marker
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            onClick={() => {
                                handleOpen()
                                setIntervention(marker)
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
                                className='w-5 my-2 h-5 hover:h-7 hover:w-8 hover:my-3  cursor-pointer'
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
            </ReactMapGl>
        </div>
    )
}

export default Map
