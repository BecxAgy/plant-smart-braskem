import React, { useState } from 'react'
import Map from './components/Map'
import { DefaultSidebar } from './components/SidebarInformation'

function App() {
    const markerData = [
        {
            id: 1,
            tag: 'POTV=090',
            avançoAtual: 75,
            avançoPrevisto: '100%',
            lngLat: [-38.320841784940825, -12.657897384062684],
            empresaMontagem: {
                nome: 'Montagens Express',
                logo: 'url_da_imagem_logo1.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico1.pdf',
            dataPrevistaInicio: '2023-10-01',
            dataPrevistaTermino: '2023-11-15',
            inicioReal: '2023-10-05',
            terminoReal: '2023-11-10',
        },
        {
            id: 2,
            tag: 'POTV=090',
            avançoAtual: 50,
            avançoPrevisto: '75%',
            lngLat: [-38.321672, -12.658756],
            empresaMontagem: {
                nome: 'Montagens Rápidas',
                logo: 'url_da_imagem_logo2.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico2.pdf',
            dataPrevistaInicio: '2023-09-15',
            dataPrevistaTermino: '2023-10-30',
            inicioReal: '2023-09-20',
            terminoReal: '2023-10-25',
        },
        {
            id: 3,
            tag: 'POTV=090',
            avançoAtual: 60,
            avançoPrevisto: '80%',
            lngLat: [-38.321672, -12.658756],
            empresaMontagem: {
                nome: 'Montagens Velozes',
                logo: 'url_da_imagem_logo3.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico3.pdf',
            dataPrevistaInicio: '2023-09-20',
            dataPrevistaTermino: '2023-10-25',
            inicioReal: '2023-09-25',
            terminoReal: '2023-10-20',
        },
        {
            id: 4,
            tag: 'POTV=090',
            avançoAtual: 70,
            avançoPrevisto: '90%',
            lngLat: [-38.321717, -12.659082],
            empresaMontagem: {
                nome: 'Montagens Eficientes',
                logo: 'url_da_imagem_logo4.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico4.pdf',
            dataPrevistaInicio: '2023-09-25',
            dataPrevistaTermino: '2023-10-10',
            inicioReal: '2023-09-30',
            terminoReal: '2023-10-05',
        },
        {
            id: 5,
            tag: 'POTV=090',
            avançoAtual: 45,
            avançoPrevisto: '70%',
            lngLat: [-38.319669, -12.657682],
            empresaMontagem: {
                nome: 'Montagens Seguras',
                logo: 'url_da_imagem_logo5.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico5.pdf',
            dataPrevistaInicio: '2023-09-10',
            dataPrevistaTermino: '2023-10-20',
            inicioReal: '2023-09-15',
            terminoReal: '2023-10-15',
        },
        {
            id: 6,
            tag: 'POTV=090',
            avançoAtual: 80,
            avançoPrevisto: '95%',
            lngLat: [-38.32363, -12.658968],
            empresaMontagem: {
                nome: 'Montagens de Elite',
                logo: 'url_da_imagem_logo6.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico6.pdf',
            dataPrevistaInicio: '2023-09-15',
            dataPrevistaTermino: '2023-10-10',
            inicioReal: '2023-09-20',
            terminoReal: '2023-10-05',
        },
        {
            id: 7,
            tag: 'POTV=090',
            avançoAtual: 55,
            avançoPrevisto: '75%',
            lngLat: [-38.321636, -12.659091],
            empresaMontagem: {
                nome: 'Montagens de Qualidade',
                logo: 'url_da_imagem_logo7.jpg',
            },
            linkDownloadIsometrico: 'url_do_isometrico7.pdf',
            dataPrevistaInicio: '2023-09-20',
            dataPrevistaTermino: '2023-10-25',
            inicioReal: '2023-09-25',
            terminoReal: '2023-10-20',
        },
    ]
    return (
        <div className='flex h-screen overflow-hidden '>
            {/* Barra lateral que ocupa 30% da tela */}

            {/* Mapa que ocupa 70% da tela */}
            <div className=' max-h-screen overflow-hidden'>
                <Map markerData={markerData} />
            </div>
        </div>
    )
}

export default App
