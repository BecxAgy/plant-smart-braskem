import React, { useState, useEffect } from 'react'

import { DefaultSidebar } from './components/SidebarInformation'
import { useSelector, useDispatch } from 'react-redux'
import { getAllInterventions } from './slice/interventionSlice'
import { getAllProjects } from './slice/projectSlice'
import SmartMap from './components/Map'

function App() {
    const dispatch = useDispatch()
    const { interventions, loading } = useSelector(state => state.intervention)

    useEffect(() => {
        dispatch(getAllInterventions())
       
    }, [dispatch])

    return (
        <div className='flex h-screen overflow-hidden '>
            {/* Barra lateral que ocupa 30% da tela */}

            {interventions && (
                <div className=' max-h-screen overflow-hidden'>
                    <SmartMap markerData={interventions} />
                </div>
            )}
        </div>
    )
}

export default App
