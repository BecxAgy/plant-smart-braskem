import React from 'react'
import {
    Card,
    CardBody,
    IconButton,
    Tooltip,
    Typography,
    Progress,
    Chip,
} from '@material-tailwind/react'
import { FaRegTimesCircle, FaDownload, FaCube } from 'react-icons/fa'
import { AiTwotoneAlert } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { downloadPdfIso } from '../slice/interventionSlice'
import { Divider } from '@mui/joy'

function ProgressTooltip({ value, color, content }) {
    return (
        <Tooltip content={content}>
            <Progress value={value} color={color} />
        </Tooltip>
    )
}

function IconButtonWithTooltip({ onClick, tooltipContent, icon, className }) {
    return (
        <Tooltip content={tooltipContent}>
            <div
                onClick={onClick}
                className={`cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 ${className}`}
            >
                {icon}
            </div>
        </Tooltip>
    )
}

function DialogDefault({ setopen, open, intervention }) {
    const dispatch = useDispatch()

    const handleClose = () => {
        setopen(false)
    }

    const handlePdfDownload = id => {
        dispatch(downloadPdfIso(id))
    }

    const {
        tag,
        PJ,
        emperesa_montagem,
        inicio_real,
        data_prev_inicio,
        termino_real,
        data_prev_termino,
        avanco_atual,
        avanco_previsto,
        alerta,
        link_iso,
        responsavel,
    } = intervention || {}

    return (
        <Card
            className={`w-full  shadow-lg ${!open ? 'hidden' : ''}`}
            style={{ maxWidth: '18rem', maxHeight: '90vh', zIndex: 99 }}
        >
            <IconButton
                onClick={handleClose}
                variant='text'
                className='!absolute top-4 right-2'
            >
                <FaRegTimesCircle className='w-5 h-5' />
            </IconButton>

            <CardBody>
                <div className=' grid grid-rows-2 items-center justify-between'>
                    <Typography
                        variant='h4'
                        color='blue-gray'
                        className='font-medium'
                    >
                        {tag}
                    </Typography>
                    <Typography
                        variant='h6'
                        color='blue-gray'
                        className='font-medium'
                    >
                        {PJ}
                    </Typography>
                </div>
                <React.Fragment>
                    <Typography>Tag Principal</Typography>
                    {emperesa_montagem &&
                        (emperesa_montagem.includes(';') ? (
                            emperesa_montagem.split(';').map((item, index) => (
                                <Chip
                                    key={index}
                                    className='p-2 text-center my-2'
                                    variant='ghost'
                                    value={item.trim()} // Use trim() para remover espaços em branco extras
                                />
                            ))
                        ) : (
                            <Chip
                                className='p-2 text-center'
                                variant='ghost'
                                value={emperesa_montagem.trim()} // Use trim() para remover espaços em branco extras
                            />
                        ))}
                </React.Fragment>

                <div className='grid grid-cols-2 gap-3 my-3'>
                    <Typography color='gray' variant='small'>
                        <span className='font-bold'>Início Real</span>{' '}
                        {inicio_real}
                    </Typography>

                    <Typography color='gray' variant='small'>
                        <span className='font-bold'>Início Previsto</span>{' '}
                        {data_prev_inicio}
                    </Typography>

                    <Typography color='gray' variant='small'>
                        <span className='font-bold'>Final Real</span>{' '}
                        {termino_real}
                    </Typography>

                    <Typography color='gray' variant='small'>
                        <span className='font-bold'>Final Prev</span>{' '}
                        {data_prev_termino}
                    </Typography>
                </div>

                <div className='grid grid-rows-3 gap-3'>
                    <ProgressTooltip
                        value={avanco_atual}
                        color={alerta}
                        content='Avanço Atual'
                    />
                    <ProgressTooltip
                        value={avanco_previsto}
                        content='Avanço Previsto'
                    />
                </div>

                <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
                    <IconButtonWithTooltip
                        onClick={() => handlePdfDownload(link_iso)}
                        tooltipContent='Link Isométrico'
                        icon={<FaDownload className='h-5 w-5' />}
                    />
                    <IconButtonWithTooltip
                        tooltipContent='Alerta'
                        icon={
                            <AiTwotoneAlert
                                className='h-5 w-5'
                                color={alerta}
                            />
                        }
                    />
                    <a href={responsavel} target='_blank'>
                        <IconButtonWithTooltip
                            tooltipContent='3D'
                            icon={<FaCube className='h-5 w-5' />}
                        />
                    </a>
                </div>
            </CardBody>
        </Card>
    )
}

export default DialogDefault
