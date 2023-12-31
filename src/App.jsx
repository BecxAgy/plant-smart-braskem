import React, { useState, useEffect } from 'react'
import Map from './components/Map'

import { useSelector, useDispatch } from 'react-redux'
import { getAllInterventions } from './slice/interventionSlice'
import { getState } from './slice/applicationSlice'
function App() {
    const dispatch = useDispatch()
    const { interventions, loading } = useSelector(state => state.intervention)

    useEffect(() => {
        dispatch(getState())
        dispatch(getAllInterventions())
    }, [dispatch])

    return (
        <div className='flex h-screen overflow-hidden '>
            {interventions && (
                <div className=' max-h-screen overflow-hidden'>
                    <Map />
                </div>
            )}
        </div>
    )
}

export default App
