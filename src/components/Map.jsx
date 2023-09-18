import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map() {
    const [showPopup, setShowPopup] = useState(false)
    const [viewState, setViewState] = React.useState({
        longitude: -38.320841784940825,
        latitude: -12.657897384062684,
        zoom: 17.5,
    })

    return (
        <div className=''>
            <ReactMapGl
                {...viewState}
                mapboxAccessToken={TOKEN}
                style={{ width: '100vw', height: '100vh' }}
                mapStyle={
                    'mapbox://styles/rebecaaguiar/clmoulsa604qe01qb3r6k01sj'
                }
            >
                <Marker
                    longitude={viewState.longitude}
                    latitude={viewState.latitude}
                    anchor='bottom'
                    onClick={() => {
                        console.log('cliquei')
                    }}
                >
                    <FaMapMarkerAlt color='orange' />
                </Marker>
            </ReactMapGl>
        </div>
    )
}

export default Map
