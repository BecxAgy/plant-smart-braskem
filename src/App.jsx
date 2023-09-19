import React, { useState } from 'react'
import Map from './components/Map'
import { DefaultSidebar } from './components/SidebarInformation'

function App() {
    return (
        <div className='flex h-screen overflow-hidden'>
            {/* Barra lateral que ocupa 30% da tela */}
            <div className='w-1/4 bg-gray-300 p-4 max-h-screen overflow-y-auto'>
                <DefaultSidebar />
            </div>
            {/* Mapa que ocupa 70% da tela */}
            <div className='w-3/4 max-h-screen overflow-hidden'>
                <Map />
            </div>
        </div>
    )
}

export default App
