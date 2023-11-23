import { List, ListItem, Progress, Typography } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux'

const CardProjectProgress = ({ openProjects }) => {
    const { projects } = useSelector(state => state.project)
    return (
        <div className={`${openProjects ? '' : 'hidden'}`}>
            <div className='grid flex-row gap-3 p-3 w-full'>
                <div className='scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent  max-h-96 overflow-scroll'>
                    <List>
                        {projects &&
                            projects.map((project, i) => (
                                <ListItem key={i} className=''>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <Typography className='font-bold text-md'>
                                            {project.Projeto}
                                        </Typography>
                                        <Progress
                                            value={project.Avanco_Atual}
                                            color='blue'
                                            label={project.Avanco_Atual}
                                        ></Progress>
                                    </div>
                                </ListItem>
                            ))}
                    </List>
                </div>
            </div>
        </div>
    )
}

export default CardProjectProgress
