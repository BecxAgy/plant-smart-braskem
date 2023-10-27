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

function DialogDefault({ setopen, open, intervention }) {
    const dispatch = useDispatch()

    const downloadPdf = id => {
        dispatch(downloadPdfIso(id))
    }
    return (
        <Card
            className={`w-full shadow-lg ${!open ? 'hidden' : ''}`}
            style={{ minWidth: '18rem', maxHeight: '90vh' }}
        >
            <IconButton
                onClick={() => setopen(false)}
                variant='text'
                className='!absolute top-4 right-2'
            >
                <FaRegTimesCircle className='w-5 h-5' />
            </IconButton>

            <CardBody>
                <div className='mb-3 grid grid-rows-2 items-center justify-between'>
                    <Typography
                        variant='h4'
                        color='blue-gray'
                        className='font-medium'
                    >
                        {intervention && intervention.tag}
                    </Typography>
                    <Typography
                        variant='h6'
                        color='blue-gray'
                        className='font-medium'
                    >
                        {intervention && intervention.PJ}
                    </Typography>
                </div>

                <Chip
                    className='p-2  text-center'
                    variant='ghost'
                    value={intervention && intervention.emperesa_montagem}
                />
                <div className='grid grid-cols-2 gap-3 my-3'>
                    <div className='grid grid-rows-2 gap-2'>
                        <Typography color='gray' variant='small'>
                            <span className='font-bold'>Início Real</span>{' '}
                            {intervention && intervention.inicio_real}
                        </Typography>

                        <Typography color='gray' variant='small'>
                            <span className='font-bold'>Início Previsto</span>{' '}
                            {intervention && intervention.data_prev_inicio}
                        </Typography>
                    </div>

                    <div className='grid grid-rows-2 gap-2'>
                        <Typography color='gray' variant='small'>
                            <span className='font-bold'>Final Real</span>{' '}
                            {intervention && intervention.termino_real}
                        </Typography>

                        <Typography color='gray' variant='small'>
                            <span className='font-bold'>Final Prev</span>{' '}
                            {intervention && intervention.data_prev_termino}
                        </Typography>
                    </div>
                </div>

                <div className='grid grid-rows-3 gap-3'>
                    <Tooltip content='Avanço Atual'>
                        <Progress
                            value={intervention && intervention.avanco_atual}
                            color={intervention && intervention.alerta}
                        />
                    </Tooltip>
                    <Tooltip content='Avanço Previsto'>
                        <Progress
                            value={intervention && intervention.avanco_previsto}
                        />
                    </Tooltip>
                </div>

                <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
                    <Tooltip content='Link Isométrico'>
                        <div
                            onClick={() => downloadPdf(intervention.link_iso)}
                            className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'
                        >
                            <FaDownload className='h-5 w-5' />
                        </div>
                    </Tooltip>
                    <Tooltip content='Alerta'>
                        <span
                            className={`cursor-pointer rounded-full border border-gray-900/10 bg-${
                                intervention && intervention.alerta
                            }-900/10 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70`}
                        >
                            <AiTwotoneAlert
                                className='h-5 w-5'
                                color={intervention && intervention.alerta}
                            />
                        </span>
                    </Tooltip>
                    <Tooltip content='3D'>
                        <a
                            href={intervention && intervention.responsavel}
                            target='_blank'
                            className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'
                        >
                            <FaCube className='h-5 w-5' />
                        </a>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}

export default DialogDefault
