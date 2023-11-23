import { api, requestConfig } from '../utils/config'

const getAreas = async () => {
    const config = requestConfig('GET', null)

    try {
        debugger
        const res = await fetch(api + '/spreadsheet/avanco/area', config)
            .then(res => res.json())
            .catch(err => err)

        return res.data
    } catch (error) {
        console.log(error)
    }
}

const projectService = {
    getAreas,
}

export default projectService
