import React from 'react'
import { Chip, Badge } from '@material-tailwind/react'
import {
    FaCheck,
    FaCircle,
    FaExclamationTriangle,
    FaFire,
    FaList,
    FaListAlt,
    FaXRay,
} from 'react-icons/fa'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineMore } from 'react-icons/ai'

function GroupColorFilter({ setSelectedColor, selectedColor }) {
    const { interventions, loading } = useSelector(state => state.intervention)
    const grayAlerts = interventions.filter(
        interv => interv.alerta === 'gray',
    ).length
    const redAlerts = interventions.filter(
        interv => interv.alerta === 'red',
    ).length
    const greenAlerts = interventions.filter(
        interv => interv.alerta === 'green',
    ).length
    const yellowAlerts = interventions.filter(
        interv => interv.alerta === 'yellow',
    ).length
    return (
        <div className='flex grid-rows-5 justify-between  my-4'>
            <div onClick={() => setSelectedColor('green')}>
                <Badge color='green' content={greenAlerts}>
                    <Chip value={<FaCheck />} variant='ghost' color='green' />
                </Badge>
            </div>
            <div onClick={() => setSelectedColor('gray')}>
                <Badge color='gray' content={grayAlerts}>
                    <Chip value={<FaCircle />} variant='ghost' />
                </Badge>
            </div>
            <div onClick={() => setSelectedColor('yellow')}>
                <Badge color='yellow' content={yellowAlerts}>
                    <Chip
                        value={<FaExclamationTriangle />}
                        variant='ghost'
                        color='yellow'
                    />
                </Badge>
            </div>

            <div onClick={() => setSelectedColor('red')}>
                <Badge color='red' content={redAlerts}>
                    <Chip value={<FaFire />} variant='ghost' color='red' />
                </Badge>
            </div>

            <div className='p-1' onClick={() => setSelectedColor('')}>
                <AiOutlineMore className='w-5 h-5' />
            </div>
        </div>
    )
}

export default GroupColorFilter
