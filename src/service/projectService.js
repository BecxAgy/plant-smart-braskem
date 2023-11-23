import { api, requestConfig } from '../utils/config'

const getProjetos = async () => {
    const config = requestConfig('GET', null)

    try {
        debugger
        const res = await fetch(api + '/spreadsheet/avanco/projeto', config)
            .then(res => res.json())
            .catch(err => err)

        return res.data
    } catch (error) {
        console.log(error)
    }
}

const projectService = {
    getProjetos,
}

export default projectService
