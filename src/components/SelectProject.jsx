import React from 'react'
import { Select, Option } from '@material-tailwind/react'

function SelectProject({ setSelectedProject, selectedProject }) {
    const handleSelectChange = value => {
       
        setSelectedProject(value) // Atualize o estado com o novo valor selecionado.
    }

    return (
        <Select
            value={selectedProject}
            onChange={handleSelectChange}
            className='rounded-xl'
            label='Projeto'
        >
            <Option value=''>Todos</Option>
            <Option value='PJ-0602304'>PJ-0602304</Option>
            <Option value='PJ-0601420'>PJ-0601420</Option>
            <Option value='PJ-0601638'>PJ-0601638</Option>
            <Option value='PJ-0601656'>PJ-0601656</Option>
            <Option value='PJ-0601931'>PJ-0601931</Option>
            <Option value='PJ-0601960'>PJ-0601960</Option>
            <Option value='PJ-0602263'>PJ-0602263</Option>
            <Option value='PJ-0602315'>PJ-0602315</Option>
            <Option value='PJ-0602316'>PJ-0602316</Option>
            <Option value='PJ-0602432'>PJ-0602432</Option>
            <Option value='PJ-0602435'>PJ-0602435</Option>
            <Option value='PJ-0602462'>PJ-0602462</Option>
            <Option value='PJ-0602513'>PJ-0602513</Option>
            <Option value='PJ-0602565'>PJ-0602565</Option>
            <Option value='PJ-0602213'>PJ-0602213</Option>
            <Option value='PJ-0601768'>PJ-0601768</Option>
            <Option value='PJ-0601397'>PJ-0601397</Option>
            <Option value='PJ-0602427'>PJ-0602427</Option>
            <Option value='PJ-0602000'>PJ-0602000</Option>
            <Option value='PJ-0602212'>PJ-0602212</Option>
        </Select>
    )
}

export default SelectProject
