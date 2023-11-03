import React, { useState, useMemo } from 'react'
import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow} from '@vis.gl/react-google-maps'
import 'mapbox-gl/dist/mapbox-gl.css'


const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_GOOGLE

function SmartMap() {
   const position = {lat: -12.6583, lng:  -38.31978}
    const [viewState, setViewState] = React.useState({
        longitude: -38.31978,
        latitude: -12.6583,
        pitch: 35,
        bearing: 261.5,
        zoom: 16.3,
    })
   

    return (
        <div className='relative z-1'>
            <APIProvider apiKey={TOKEN}>
                <div className="w-[100vw] h-[100vh]">
                    <Map zoom={14} center={position}>

                    </Map>
                </div>
               
            </APIProvider>
        </div>
    )
}

export default SmartMap
