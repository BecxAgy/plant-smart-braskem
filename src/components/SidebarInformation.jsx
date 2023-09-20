import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Input,
} from '@material-tailwind/react'
import {
    QuestionMarkCircleIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'
import InterventionItemList from './InterventionItemList'

export function DefaultSidebar({ markerData }) {
    return (
        <Card className='bg-gray-100'>
            <div className='mb-2 p-4'>
                <Typography variant='h5' color='blue-gray'>
                    Planta QI
                </Typography>
                <div className='mt-3'>
                    <Input
                        icon={<MagnifyingGlassIcon className='h-5 w-5' />}
                        label='Search'
                    />
                </div>
            </div>
            <List>
                {markerData &&
                    markerData.map((intervention, i) => (
                        <InterventionItemList intervention={intervention} />
                    ))}
                <InterventionItemList />
            </List>
        </Card>
    )
}
