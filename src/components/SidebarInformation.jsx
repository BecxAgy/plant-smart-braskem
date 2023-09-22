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
import logoBraskem from '../images/logoBraskem.png'

export function DefaultSidebar({ markerData }) {
    return (
        <div className='z-10 p-4 rounded-lg absolute top-0 left-0 overflow-y-auto w-1/4 '>
            <div className='bg-white rounded-2xl p-10'>
                <img src={logoBraskem} width={180} alt='' />
                <div className='w-1/2'>
                    <Input
                        className='border-none bg-blue-gray-900 rounded-xl '
                        type='search'
                        color='white'
                        label='Tag Name'
                        icon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
                    />
                    <List>
                        {markerData &&
                            markerData.map(marker => (
                                <InterventionItemList
                                    key={marker.id}
                                    intervention={marker}
                                />
                            ))}
                    </List>
                </div>
            </div>
        </div>
    )
}
