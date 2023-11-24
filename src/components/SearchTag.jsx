import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Input } from '@material-tailwind/react'

const SearchTag = ({ searchTag, setSearchTag }) => {
    return (
        <Input
            size='sm'
            value={searchTag}
            onChange={e => {
                setSearchTag(e.target.value)
                console.log(searchTag)
            }}
            className='bg-blue-gray-900 rounded-md shadow '
            type='search'
            color='blue'
            label='Pesquisa por Tag'
            icon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
        />
    )
}

export default SearchTag
