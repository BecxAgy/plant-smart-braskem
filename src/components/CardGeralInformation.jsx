import { Divider } from '@mui/joy'
import './sidebar.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import CardGeralProgress from './dash/CardGeralProgress'
import CardProjectProgress from './dash/CardProjectProgress'
import CardAreaProgress from './dash/CardAreaProgress'
import { useState } from 'react'

function CardGeralInformation({
    openSidebar,
    selectedProject,
    setSelectedProject,
    search,
    setSearch,
}) {
    const [openCard, setOpenCard] = useState(true)
    const [openProjects, setOpenProjects] = useState(false)
    const [openArea, setOpenArea] = useState(false)
    return (
        <div
            className={`relative  flex flex-col  sm:${
                openSidebar ? 'hidden ' : ''
            }`}
        >
            <div className=' bg-white shadow-lg rounded-xl bg-clip-border border-rounded index-progress mb-5'>
                <div
                    className={`flex
                justify-between
                p-3 ${openCard ? '' : 'gap-3'}`}
                >
                    <h1 className='font-bold  text-start'>Avanço Geral</h1>
                    {openCard ? (
                        <FaChevronUp
                            size=''
                            onClick={() => setOpenCard(!openCard)}
                        />
                    ) : (
                        <FaChevronDown onClick={() => setOpenCard(!openCard)} />
                    )}
                </div>
                <Divider />
                <CardGeralProgress openCard={openCard} />
            </div>
            <div
                className={` bg-white shadow-lg rounded-xl bg-clip-border border-rounded index-progress mb-5 sm:${
                    openSidebar ? 'hidden ' : ''
                }`}
            >
                <div
                    className={`flex
                justify-between
                p-3 ${openProjects ? '' : 'gap-3'}`}
                >
                    <h1 className='font-bold  text-start'>
                        Avanço por Projeto
                    </h1>
                    {openProjects ? (
                        <FaChevronUp
                            onClick={() => {
                                setOpenProjects(!openProjects)
                            }}
                        />
                    ) : (
                        <FaChevronDown
                            onClick={() => {
                                if (openArea) setOpenArea(false)

                                setOpenProjects(!openProjects)
                            }}
                        />
                    )}
                </div>
                <Divider />
                <CardProjectProgress
                    onClick={() => {}}
                    openProjects={openProjects}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                />
            </div>

            <div
                className={` bg-white shadow-lg rounded-xl bg-clip-border border-rounded index-progress  sm:${
                    openSidebar ? 'hidden ' : ''
                }`}
            >
                <div
                    className={`flex
                justify-between
                p-3 ${openArea ? '' : 'gap-3'}`}
                >
                    <h1 className='font-bold  text-start'>Avanço por Área</h1>
                    {openArea ? (
                        <FaChevronUp
                            onClick={() => {
                                setOpenArea(!openArea)
                            }}
                        />
                    ) : (
                        <FaChevronDown
                            onClick={() => {
                                if (openProjects) setOpenProjects(false)

                                setOpenArea(!openArea)
                            }}
                        />
                    )}
                </div>
                <Divider />
                <CardAreaProgress
                    search={search}
                    setSearch={setSearch}
                    openArea={openArea}
                />
            </div>
        </div>
    )
}

export default CardGeralInformation
