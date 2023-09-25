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
        <div
            className='p-4 rounded-lg absolute top-0 left-0 w-1/4'
            style={{ height: '90vh' }}
        >
            <div className='bg-white rounded-2xl p-10 '>
                <div>
                    <img src={logoBraskem} width={180} alt='' />

                    <Input
                        className='border-none bg-blue-gray-900 rounded-xl '
                        type='search'
                        color='blue'
                        label='Tag Name'
                        icon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
                    />
                </div>

                <List
                    className='scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent overflow-y-auto mt-5'
                    style={{ maxHeight: '80vh' }}
                >
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
    )
}
