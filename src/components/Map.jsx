import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { DefaultSidebar } from './SidebarInformation'
import { HomeIcon } from '@heroicons/react/24/solid'

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map({ markerData }) {
    const [viewState, setViewState] = React.useState({
        longitude: -38.320841784940825,
        latitude: -12.657897384062684,
        zoom: 17,
        bearing: 170,
        pitch: 30,
    })

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
                    <DefaultSidebar markerData={markerData} S />
                </div>

                {markerData &&
                    markerData.map(marker => (
                        <Marker
                            longitude={marker.lngLat[0]}
                            latitude={marker.lngLat[1]}
                            anchor='bottom'
                            onClick={() => {
                                console.log('cliquei')
                            }}
                        ></Marker>
                    ))}
            </ReactMapGl>
        </div>
    )
}

export default Map
