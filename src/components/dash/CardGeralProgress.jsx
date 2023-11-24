import { CircularProgress } from '@mui/joy'
import React from 'react'
import { Tooltip, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'

const CardGeralProgress = ({ openCard }) => {
    const { status } = useSelector(state => state.status)

    return (
        <div className={`${openCard ? '' : 'hidden'}`}>
            <div
                className={`grid grid-cols-2 justify-center items-center gap-10 px-10 py-5  `}
            >
                <Tooltip content='Avanço Atual' placement='left'>
                    <CircularProgress
                        sx={{
                            '--CircularProgress-size': '105px',
                            '--CircularProgress-trackThickness': '9px',
                            '--CircularProgress-progressThickness': '10px',
                        }}
                        determinate
                        color={status.Cor}
                        value={status.Avanco_Atual_Geral}
                    >
                        <div className='grid grid-rows-2'>
                            <Typography className='font-bold  text-md'>
                                {status.Avanco_Atual_Geral}%
                            </Typography>
                            <Typography className='font-medium text-sm'>
                                Atual
                            </Typography>
                        </div>
                    </CircularProgress>
                </Tooltip>

                <Tooltip content='Avanço Previsto' placement='bottom'>
                    <CircularProgress
                        sx={{
                            '--CircularProgress-size': '105px',
                            '--CircularProgress-trackThickness': '9px',
                            '--CircularProgress-progressThickness': '10px',
                        }}
                        determinate
                        value={status.Avanco_Previsto_Geral}
                    >
                        <div className='grid grid-rows-2'>
                            <Typography className='font-bold text-center text-md'>
                                {status.Avanco_Previsto_Geral}%
                            </Typography>
                            <Typography className='font-medium text-center text-sm'>
                                Previsto
                            </Typography>
                        </div>
                    </CircularProgress>
                </Tooltip>
            </div>
        </div>
    )
}

export default CardGeralProgress
