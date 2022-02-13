import { Dispatch } from 'redux'
import { userAPI } from '../api/api'


const ADD_NUMBER = 'ADD_NUMBER'
const UPDATE_NUMBER = 'UPDATE_NUMBER'
const UPDATE_COURSE = 'UPDATE_COURSE'
const CURRENT_CURRENCY = 'CURRENT_CURRENCY'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
const RESULT_CURRENCY = 'RESULT_CURRENCY'





type resultType = {
    cc: string
    exchangedate: Date
    r030: number
    rate: number
    txt: string
}

export type initialStateType = {
    result: resultType[]
    currentCurrency: number[]
    changeCurrency: number[]
    resultCurrency: number
    newMessText: number
}

let initialState: initialStateType = {
    result: [],
    currentCurrency: [],    //текущая валюта
    changeCurrency: [],    //какую валюту хотят получить
    resultCurrency: 0,     //результат конвертации
    newMessText:0,
}







const numbersReducer = (state = initialState, action: ActionsType): initialStateType => {
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


export type ActionsType = actionAddNewCourseType | actionUpdateMessTextType | actionCourseType | actionCurrentCurrencyType |
    actionChangeCurrencyType | actionResultCurrencyType



type actionAddNewCourseType = {
    type: typeof ADD_NUMBER
    result: resultType[]
}

export let actionAddNewCourse = (rates: resultType[]): actionAddNewCourseType => {
    return {
        type: ADD_NUMBER,
        result: rates
    }
}


type actionUpdateMessTextType = {
    type: typeof UPDATE_NUMBER
    newMess: number
}
export let actionUpdateMessText = (text: number): actionUpdateMessTextType => {
    return {
        type: UPDATE_NUMBER,
        newMess: text
    }
}


type actionCourseType = {
    type: typeof UPDATE_COURSE
    result: number[]
}
export let actionCourse = (newresult: number[]): actionCourseType => {
    return {
        type: UPDATE_COURSE,
        result: newresult
    }
}


type actionCurrentCurrencyType = {
    type: typeof CURRENT_CURRENCY
    result: number[]
}
export let actionCurrentCurrency = (result: number[]): actionCurrentCurrencyType => {
    return {
        type: CURRENT_CURRENCY,
        result: result
    }
}

type actionChangeCurrencyType = {
    type: typeof CHANGE_CURRENCY
    result: number[]
}

export let actionChangeCurrency = (result: number[]): actionChangeCurrencyType => {
    return {
        type: CHANGE_CURRENCY,
        result: result
    }
}


type actionResultCurrencyType = {
    type: typeof RESULT_CURRENCY
    result: number
}
export let actionResultCurrency = (result: number): actionResultCurrencyType => {
    return {
        type: RESULT_CURRENCY,
        result: result
    }
}



export const getCourse = () => {
    return (dispatch: Dispatch) => {
        userAPI.getCourse()
            .then((data: resultType[]) => {
                dispatch(actionAddNewCourse(data))
            })

    }
}


export default numbersReducer