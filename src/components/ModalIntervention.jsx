import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Tooltip,
    Typography,
    Progress, Chip
} from '@material-tailwind/react'
import {
    FaRegTimesCircle,
    FaBed,
    FaFire,
    FaPercent,
    FaDownload,
} from 'react-icons/fa' // Importing icons from react-icons



function DialogDefault({ setopen, open, intervention }) {
    return (
        <Card className={`w-full shadow-lg ${!open ? 'hidden' : ''}`} style={{ minWidth: '18rem', maxHeight:"90vh"}}>
            <CardHeader floated={false} color='blue-gray'>
                <div className=''>
                    <img
                        src={intervention && intervention.responsavel}
                        alt='Responsavel'
                    />
                    <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 ' />
                    <IconButton
                        size='sm'
                        color='red'
                        variant='text'
                        className='!absolute top-0 right-0 rounded-full'
                        onClick={() => setopen(!open)}
                    >
                        <FaRegTimesCircle className='h-6 w-6' />{' '}
                        {/* React icon */}
                    </IconButton>
                </div>
            </CardHeader>
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

                <Chip className="p-2  text-center" variant="ghost" value={intervention && intervention.emperesa_montagem} />  
                <div className="grid grid-cols-2 gap-3 my-3">
                    <div className="grid grid-rows-2 gap-2">
                    <Typography color='gray' variant='small'>
                        
                        <span className='font-bold'>Início Real</span> {intervention && intervention.inicio_real}
                        
                        </Typography>

                        <Typography color='gray' variant='small'>
                        
                        <span className='font-bold'>Início Previsto</span> {intervention && intervention.data_prev_inicio} 
                        
                        </Typography>
                    </div>
                    
                    <div className="grid grid-rows-2 gap-2">
                    <Typography color='gray' variant='small'>
                    
                     <span className='font-bold'>Início Real</span> {intervention && intervention.termino_real}
                    
                    </Typography>

                    <Typography color='gray' variant='small'>
                    
                    <span className='font-bold'>Início Previsto</span> {intervention && intervention.data_prev_termino} 
                    
                    </Typography>
                    </div>
                </div>

                <div className="grid grid-rows-3 gap-3">
                <Tooltip content='Avanço Atual'>
                    <Progress value={intervention && intervention.avanco_atual} color={intervention && intervention.alerta}/>
                </Tooltip>
                <Tooltip content='Avanço Previsto'>
                    <Progress value={intervention && intervention.avanco_previsto}/>
                </Tooltip>
                
                </div>
                
                
                
                <div className='group mt-8 inline-flex flex-wrap items-center gap-3'>
                    <Tooltip content='Link Isométrico'>
                        <a href={intervention && intervention.link_iso} className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <FaDownload className='h-5 w-5' />{' '}
                            {/* React icon */}
                        </a>
                    </Tooltip>
                    <Tooltip content='Alerta'>
                        <span className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                            <FaFire className='h-5 w-5' /> {/* React icon */}
                        </span>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}

export default DialogDefault
