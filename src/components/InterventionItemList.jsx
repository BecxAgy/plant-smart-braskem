import {
    ListItem,
    ListItemPrefix,
    Progress,
    Typography,
} from '@material-tailwind/react'

import logo from '../images/Logo_Iso_mini.png'

function InterventionItemList({ intervention, onClick }) {
    return (
        intervention && (
            <div className='py-4'>
                <ListItem onClick={onClick}>
                    <ListItemPrefix>
                        <img src={logo} className='' />
                    </ListItemPrefix>
                    <div className='w-full'>
                        <Typography className='font-bold' color='blue-gray'>
                            {intervention.tag}
                        </Typography>

                        <div className=' w-1/2 mt-1'>
                            <Progress
                                className='bg-gray-100'
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
