import React, { useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

const TOKEN = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

function Map({ markerData }) {
    // Lista de coordenadas de marcadores

    useEffect(() => {
        // Inicializar o mapa do Mapbox GL JS
        mapboxgl.accessToken = TOKEN
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/rebecaaguiar/clmoulsa604qe01qb3r6k01sj',
            center: [-38.320841784940825, -12.657897384062684],
            zoom: 10,
            pitch: 35,
            bearing: 140,
        })
        console.log(markerData)
        // Adicionar marcadores ao mapa
        markerData.forEach(markerInfo => {
            new mapboxgl.Marker()
                .setLngLat(markerInfo.lngLat)
                .setPopup(
                    new mapboxgl.Popup().setHTML(`<h3>${markerInfo.tag}</h3>`),
                )
                .addTo(map)
        })

        return () => {
            // Limpar recursos quando o componente for desmontado
            map.remove()
        }
    }, [])

    return (
        <div>
            {/* Div para o mapa do Mapbox GL JS */}
            <div id='map' style={{ width: '100vw', height: '100vh' }}></div>
        </div>
    )
}

export default Map
