import *as axios from 'axios'

const instace = axios.create({
    baseURL: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json',

})

export const userAPI = {
    getCourse() {
        return instace.get()
            .then(response => {
                return response.data
            })
    }

}
