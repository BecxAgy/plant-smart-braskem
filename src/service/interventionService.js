import { api, requestConfig } from '../utils/config'

const getInterventions = async () => {
    const config = requestConfig('GET', null)

    try {
        debugger
        const res = await fetch(api + '/spreadsheet', config)
            .then(res => res.json())
            .catch(err => err)
        
        return res.data
    } catch (err) {
        console.log(err)
    }
}

const interventionService = {
    getInterventions,
}

export default interventionService
