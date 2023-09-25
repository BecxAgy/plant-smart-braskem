import React from 'react'
import {
    Avatar,
    ListItem,
    ListItemPrefix,
    Progress,
    Typography,
} from '@material-tailwind/react'

function InterventionItemList({ intervention }) {
    return (
        intervention && (
            <div className='py-4'>
                <ListItem>
                    <ListItemPrefix>
                        <Avatar />
                    </ListItemPrefix>
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
