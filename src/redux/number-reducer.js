import { userAPI } from '../api/api'


const ADD_NUMBER = 'ADD_NUMBER'
const UPDATE_NUMBER = 'UPDATE_NUMBER'
const UPDATE_COURSE = 'UPDATE_COURSE'
const CURRENT_CURRENCY='CURRENT_CURRENCY'
const CHANGE_CURRENCY='CHANGE_CURRENCY'
const RESULT_CURRENCY='RESULT_CURRENCY'


let initialState = {
    result: [],
    currentCurrency:[],    //текущая валюта
    changeCurrency:[],    //какую валюту хотят получить
    resultCurrency:[],     //результат конвертации
    newMessText: '',
}







const numbersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER: return {
            ...state, result: action.result
        }
        case UPDATE_NUMBER: {
            let stateCopy = { ...state }
            stateCopy.newMessText = action.newMess
            return stateCopy
        }
        case CURRENT_CURRENCY: {
            let stateCopy = { ...state }
            stateCopy.currentCurrency = action.result
            return stateCopy
        }
        case CHANGE_CURRENCY: {
            let stateCopy = { ...state }
            stateCopy.changeCurrency = action.result
            return stateCopy
        }
        case RESULT_CURRENCY: {
            let stateCopy = { ...state }
            stateCopy.resultCurrency = action.result
            return stateCopy
        }
        default: return state 
    }
}

export let actionAddNewCourse = (rates) => {
    return {
        type: ADD_NUMBER,
        result: rates
    }
}

export let actionUpdateMessText = (text) => {
    return {
        type: UPDATE_NUMBER,
        newMess: text
    }
}

export let actionCourse = (newresult) => {
    return {
        type: UPDATE_COURSE,
        result: newresult
    }
}

export let actionCurrentCurrency = (result) => {
    return {
        type: CURRENT_CURRENCY,
        result: result
    }
}

export let actionChangeCurrency = (result) => {
    return {
        type: CHANGE_CURRENCY,
        result: result
    }
}

export let actionResultCurrency = (result) => {
    return {
        type: RESULT_CURRENCY,
        result: result
    }
}



export const getCourse = () => {
    return (dispatch) => {
        userAPI.getCourse()
            .then(data => {
                dispatch(actionAddNewCourse(data))
            })

    }
}


export default numbersReducer