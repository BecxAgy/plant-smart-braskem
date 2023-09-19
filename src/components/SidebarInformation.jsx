import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Input,
} from '@material-tailwind/react'
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    QuestionMarkCircleIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/solid'

export function DefaultSidebar() {
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
                <ListItem>
                    <ListItemPrefix>
                        <QuestionMarkCircleIcon className='h-6 w-5' />
                    </ListItemPrefix>
                </ListItem>
            </List>
        </Card>
    )
}
