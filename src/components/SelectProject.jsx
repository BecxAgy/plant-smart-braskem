import React, { useState } from 'react'
import Select from 'react-select'

function SelectProject({ setSelectedProject, selectedProject }) {
    const handleSelectChange = selectedOption => {
        setSelectedProject(selectedOption.value) // Atualize o estado com o novo valor selecionado.
    }

    // Lista de opções ordenada
    const options = [
        { label: 'Todos', value: '' },
        { label: 'PJ-0601397', value: 'PJ-0601397' },
        { label: 'PJ-0601420', value: 'PJ-0601420' },
        { label: 'PJ-0601427', value: 'PJ-0601427' },
        { label: 'PJ-0601429', value: 'PJ-0601429' },
        { label: 'PJ-0601420', value: 'PJ-0601420' },
        { label: 'PJ-0601638', value: 'PJ-0601638' },
        { label: 'PJ-0601656', value: 'PJ-0601656' },
        { label: 'PJ-0601768', value: 'PJ-0601768' },
        { label: 'PJ-0601931', value: 'PJ-0601931' },
        { label: 'PJ-0601960', value: 'PJ-0601960' },
        { label: 'PJ-0602000', value: 'PJ-0602000' },
        { label: 'PJ-0602212', value: 'PJ-0602212' },
        { label: 'PJ-0602213', value: 'PJ-0602213' },
        { label: 'PJ-0602263', value: 'PJ-0602263' },
        { label: 'PJ-0602315', value: 'PJ-0602315' },
        { label: 'PJ-0602316', value: 'PJ-0602316' },
        { label: 'PJ-0602427', value: 'PJ-0602427' },
        { label: 'PJ-0602432', value: 'PJ-0602432' },
        { label: 'PJ-0602435', value: 'PJ-0602435' },
        { label: 'PJ-0602462', value: 'PJ-0602462' },
        { label: 'PJ-0602513', value: 'PJ-0602513' },
        { label: 'PJ-0602565', value: 'PJ-0602565' },
    ]

    // Ordena as opções alfabeticamente
    options.sort((a, b) => a.label.localeCompare(b.label))

    const [inputValue, setInputValue] = useState('')

    // Filtra as opções com base no valor de entrada
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
        <Select
            value={{
                label: selectedProject ? selectedProject : 'Projeto',
                value: selectedProject,
            }}
            onChange={handleSelectChange}
            options={filteredOptions}
            onInputChange={value => setInputValue(value)}
            inputValue={inputValue}
            className='w-56  '
        />
    )
}

export default SelectProject
