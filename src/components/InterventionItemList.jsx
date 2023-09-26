import React from 'react'
import {
    Avatar,
    ListItem,
    ListItemPrefix,
    Progress,
    Typography,
} from '@material-tailwind/react'

function InterventionItemList({ intervention, onClick }) {
    return (
        intervention && (
            <div className='py-4'>
                <ListItem onClick={onClick}>
                    <ListItemPrefix>
                        <Avatar
                            variant='rounded'
                            src='https://static.vecteezy.com/system/resources/previews/020/017/552/original/location-icon-design-free-vector.jpg'
                            size='lg'
                        />
                    </ListItemPrefix>
                    <div className='w-full'>
                        <Typography className='font-bold' color='blue-gray'>
                            {intervention.tag}
                        </Typography>
                        <Typography variant='small' color='blue-gray'>
                            {intervention.emperesa_montagem}
                        </Typography>
                        <div className=' w-1/2 mt-1'>
                            <Progress
                                value={intervention.avanco_atual}
                                size='md'
                            />
                        </div>
                    </div>
                </ListItem>
            </div>
        )
    )
}

export default InterventionItemList
