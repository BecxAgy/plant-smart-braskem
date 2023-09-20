import React from 'react'
import {
    ListItem,
    ListItemPrefix,
    Progress,
    Typography,
} from '@material-tailwind/react'
import {
    CircleStackIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid'

function InterventionItemList({ intervention }) {
    return (
        intervention && (
            <div className='py-3 px-1'>
                <ListItem>
                    <ListItemPrefix></ListItemPrefix>
                    <div className='w-full'>
                        <Typography className='font-bold' color='blue-gray'>
                            {intervention.tag}
                        </Typography>
                        <div className='mt-1'>
                            <Progress
                                value={25}
                                size='sm'
                                color='red'
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
