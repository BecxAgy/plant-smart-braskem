import { api, requestConfig } from '../utils/config'

const getState = async () => {
    const config = requestConfig('GET', null)

    try {
        const res = await fetch(api + '/spreadsheet/status', config)
            .then(res => res.json())
            .catch(err => err)

        return res.data[0]
    } catch (error) {
        console.log(error)
    }
}

const applicationService = {
    getState,
}

export default applicationService
