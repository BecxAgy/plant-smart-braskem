import {
    ListItem,
    ListItemPrefix,
    Progress,
    Typography,
} from '@material-tailwind/react'

import logo from '../images/Logo_Iso_mini.png'
import { CircularProgress } from '@mui/joy'

function InterventionItemList({ intervention, onClick }) {
    return (
        intervention && (
            <div className='py-4'>
                <ListItem onClick={onClick}>
                    <ListItemPrefix>
                        <CircularProgress
                            size='lg'
                            determinate
                            value={intervention.avanco_atual}
                        >
                            <Typography>
                                {intervention.avanco_atual}%
                            </Typography>
                        </CircularProgress>
                    </ListItemPrefix>
                    <div className='w-full'>
                        <Typography className='font-bold' color='blue-gray'>
                            {intervention.tag}
                        </Typography>
                    </div>
                </ListItem>
            </div>
        )
    )
}

export default InterventionItemList
