import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'

function SelectProject({ setSelectedProject, selectedProject }) {
    const { projects } = useSelector(state => state.project)

    const [inputValue, setInputValue] = useState('')
    const [isClearable, setIsClearable] = useState(true)
    const [filteredOptions, setFilteredOptions] = useState([])

    useEffect(() => {
        // Ordena as opções alfabeticamente quando projects mudar
        const sortedProjects = [...projects].sort((a, b) =>
            a.Projeto.localeCompare(b.Projeto),
        )
        setFilteredOptions(sortedProjects)
    }, [projects])

    const handleSelectChange = selectedOption => {
        if (selectedOption === null) {
            setSelectedProject('')
        } else {
            setSelectedProject(selectedOption.value)
        }
    }

    // Filtra as opções com base no valor de entrada
    const handleInputChange = value => {
        setInputValue(value)
        const filtered = projects.filter(option =>
            option.Projeto.toLowerCase().includes(value.toLowerCase()),
        )
        setFilteredOptions(filtered)
    }
    const options = filteredOptions.map(option => ({
        label: option.Projeto,
        value: option.Projeto,
    }))

    return (
        <Select
            value={{
                label: selectedProject ? selectedProject : 'Projeto',
                value: selectedProject,
            }}
            isClearable={isClearable}
            onChange={handleSelectChange}
            options={options}
            onInputChange={handleInputChange}
            inputValue={inputValue}
            className=''
        />
    )
}

export default SelectProject
