import { Tooltip, Typography } from '@material-tailwind/react'
import { CircularProgress, Divider } from '@mui/joy'
import React from 'react'
import { useSelector } from 'react-redux'

function CardGeralInformation({ openSidebar }) {
    const { status } = useSelector(state => state.status)

    return (
        <div
            className={`relative flex flex-col bg-white shadow-lg items-center rounded-xl bg-clip-border  sm:${
                openSidebar ? 'hidden' : ''
            }`}
        >
            <h3 className='font-bold p-3'>Avanço Geral</h3>
            <Divider />
            <div className='grid grid-rows-2 justify-center items-center gap-3 p-2'>
                <Tooltip content='Avanço Atual' placement='left'>
                    <CircularProgress
                        size='lg'
                        determinate
                        color={status.Cor}
                        value={status.Avanco_Atual_Geral}
                    >
                        <Typography>{status.Avanco_Atual_Geral}%</Typography>
                    </CircularProgress>
                </Tooltip>

                <Tooltip content='Avanço Previsto' placement='bottom'>
                    <CircularProgress
                        size='lg'
                        determinate
                        value={status.Avanco_Previsto_Geral}
                    >
                        <Typography>{status.Avanco_Previsto_Geral}%</Typography>
                    </CircularProgress>
                </Tooltip>
            </div>
        </div>
    )
}

export default CardGeralInformation
