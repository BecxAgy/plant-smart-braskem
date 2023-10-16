import React, { useState } from 'react'
import { Chip, Badge } from '@material-tailwind/react'
import {
    FaCheck,
    FaCircle,
    FaExclamationTriangle,
    FaFire,
} from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { LuFilterX } from 'react-icons/lu'

function GroupColorFilter({ setSelectedColor, selectedColor, interventions }) {
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

    // Estado para armazenar a cor selecionada
    const [selectedChip, setSelectedChip] = useState(selectedColor)

    return (
        <div className='flex grid-rows-5 justify-between my-4 '>
            <div onClick={() => handleChipClick('green')}>
                <Badge color='green' content={greenAlerts}>
                    <Chip
                        value={<FaCheck />}
                        variant='ghost'
                        className={`${
                            selectedChip === 'green'
                                ? 'bg-green-400'
                                : 'bg-green-200'
                        } hover:px-4 hover:py-2`}
                    />
                </Badge>
            </div>
            <div onClick={() => handleChipClick('gray')}>
                <Badge color='gray' content={grayAlerts}>
                    <Chip
                        value={<FaCircle />}
                        variant='ghost'
                        className={`${
                            selectedChip === 'gray'
                                ? 'bg-gray-400'
                                : 'bg-gray-200'
                        } hover:px-4 hover:py-2`}
                    />
                </Badge>
            </div>
            <div onClick={() => handleChipClick('yellow')}>
                <Badge color='yellow' content={yellowAlerts}>
                    <Chip
                        value={<FaExclamationTriangle />}
                        variant='ghost'
                        className={`${
                            selectedChip === 'yellow'
                                ? 'bg-yellow-400'
                                : 'bg-yellow-200'
                        } hover:px-4 hover:py-2`}
                    />
                </Badge>
            </div>

            <div onClick={() => handleChipClick('red')}>
                <Badge color='red' content={redAlerts}>
                    <Chip
                        value={<FaFire />}
                        variant='ghost'
                        className={` ${
                            selectedChip === 'red' ? 'bg-red-400' : 'bg-red-200'
                        } hover:px-4 hover:py-2`}
                    />
                </Badge>
            </div>

            <div className='p-1 ' onClick={() => handleChipClick('')}>
                <LuFilterX className='w-5 h-5 hover:w-6 hover:h-6' />
            </div>
        </div>
    )

    // Função para lidar com o clique no chip
    function handleChipClick(color) {
        setSelectedChip(color)
        setSelectedColor(color) // Define a cor selecionada no componente pai
    }
}

export default GroupColorFilter
