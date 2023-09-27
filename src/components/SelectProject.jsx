import React from 'react'
import { Select, Option } from '@material-tailwind/react'

function SelectProject({ setSelectedProject, selectedProject }) {
    const handleSelectChange = value => {
        console.log(value)
        setSelectedProject(value) // Atualize o estado com o novo valor selecionado.
    }

    return (
        <Select
            value={selectedProject}
            onChange={handleSelectChange} // Use a função handleSelectChange como callback de onChange.
            className='rounded-xl'
            label='Projeto'
        >
            <Option value=''>Todos</Option>
            <Option value='PJ-0601638'>PJ-0601638</Option>
            <Option value='PJ-0601420'>PJ-0601420</Option>
        </Select>
    )
}

export default SelectProject
