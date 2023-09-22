import React from 'react'
import {
    ListItem,
    ListItemPrefix,
    Progress,
    Typography,
} from '@material-tailwind/react'

function InterventionItemList({ intervention }) {
    return (
        intervention && (
            <div className='py-3 mt-5'>
                <ListItem>
                    <ListItemPrefix></ListItemPrefix>
                    <div className='w-full'>
                        <Typography className='font-bold' color='blue-gray'>
                            {intervention.tag}
                        </Typography>
                        <div className='mt-1'>
                            <Progress
                                value={intervention.avançoAtual}
                                size='sm'
                                label='atual'
                            />
                        </div>
                    </div>
                </ListItem>
            </div>
        )
    )
}

export default InterventionItemList
