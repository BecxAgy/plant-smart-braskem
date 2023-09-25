import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { DefaultSidebar } from './SidebarInformation'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useSelector } from 'react-redux'
import DialogDefault from './ModalIntervention'

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map({ markerData }) {
    const { interventions, loading } = useSelector(state => state.intervention)
    const [open, setOpen] = React.useState(false)
    const [viewState, setViewState] = React.useState({
        longitude: -38.320841784940825,
        latitude: -12.657897384062684,
        zoom: 17,
        bearing: 170,
        pitch: 30,
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
                <div className='w-1/3 z-10'>
                    <DefaultSidebar markerData={interventions} />
                    <DialogDefault handleOpen={handleOpen} open={open} />
                </div>

                {interventions &&
                    interventions.map(marker => (
                        <Marker
                            color={marker.alerta}
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            anchor='bottom'
                            onClick={() => {
                                handleOpen()
                            }}
                        ></Marker>
                    ))}
            </ReactMapGl>
        </div>
    )
}

export default Map
