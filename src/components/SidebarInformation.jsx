import { Input, List, Typography } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InterventionItemList from './InterventionItemList'
import logoBraskem from '../images/logoBrask.svg'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import SelectProject from './SelectProject'
import GroupColorFilter from './GroupColorFilter'
import { HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi'
import Notification from './Notification'
import './sidebar.css'

export function DefaultSidebar({
    openSidebar,
    setOpenSidebar,
    open,
    setOpen,
    setIntervention,
    setSelectedColor,
    selectedProject,
    setSelectedProject,
    interventionsFiltered,
    search,
    setSearch,
}) {
    const { interventions } = useSelector(state => state.intervention)

    return (
        <div
            className={`p-5 absolute top-0 left-0 w-full z-0 sm:${
                open ? 'hidden' : ''
            } index-100`}
        >
            {!openSidebar ? (
                <div
                    className='absolute m-5 '
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    <HiMenuAlt2 className='text-white w-9 h-9' />
                </div>
            ) : (
                <div
                    className='grid gird-rows h-[96vh] bg-white rounded-2xl p-5'
                    style={{
                        minWidth: '18rem',
                        maxWidth: '25rem',
                    }}
                >
                    <div>
                        <div className='relative text-center my-4'>
                            {' '}
                            {/* Centering container */}
                            <HiMenuAlt3
                                className='w-8 h-8 absolute top-3 right-2'
                                onClick={() => setOpenSidebar(!openSidebar)}
                            />
                            <img
                                src={logoBraskem}
                                width={160}
                                alt=''
                                className='mx-auto ' // Center the image
                            />
                        </div>
                        <div className='p-2'></div>
                        <GroupColorFilter
                            setSelectedColor={setSelectedColor}
                            interventions={interventionsFiltered}
                        />

                        {/* Adicione classes de responsividade ao SelectProject */}
                        <div className='w-full md:w-32 my-2'>
                            <SelectProject
                                selectedProject={selectedProject}
                                setSelectedProject={setSelectedProject}
                            />
                        </div>

                        {/* Adicione classes de responsividade ao Input de Pesquisa */}
                        <Input
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value)
                                console.log(search)
                            }}
                            className='bg-blue-gray-900 rounded-md shadow '
                            type='search'
                            color='blue'
                            label='Nome do Isométrico'
                            icon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
                        />
                        <Notification />
                    </div>

                    {/* Mantenha a altura máxima responsiva */}

                    <List className='scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent overflow-y-auto mt-3'>
                        {interventions &&
                            interventionsFiltered.map(marker => (
                                <InterventionItemList
                                    key={marker.id}
                                    intervention={marker}
                                    onClick={() => {
                                        setOpen(!open)
                                        setIntervention(marker)
                                    }}
                                />
                            ))}
                    </List>

                    <div className='text-end'>
                        <Typography variant='small' color='gray'>
                            Powered by Kempetro Technology®
                        </Typography>
                    </div>
                </div>
            )}
        </div>
    )
}
