import React, { useEffect } from 'react'
import Exchange from './Exchange'
import { getCourse, actionUpdateMessText, actionCourse, actionCurrentCurrency, actionChangeCurrency, actionResultCurrency } from '../../../redux/number-reducer'
import { connect } from 'react-redux'

const ExchangeContainer = (props) => {
    useEffect(() => {
        props.getNewCourse()
    }, []);

    return (
        <>
            <Exchange
                result={props.result}
                currentCurrency={props.currentCurrency}
                changeCurrency={props.changeCurrency}
                newMessText={props.newMessText}
                resultCurrency={props.resultCurrency}
                newMessText={props.newMessText}
                getNewCourse={props.getNewCourse}
                onupdateText={props.onupdateText}
                onupdateCourse={props.onupdateCourse}
                onCurrentCurrency={props.onCurrentCurrency}
                onChangeCurrency={props.onChangeCurrency}
                onResultCurrency={props.onResultCurrency}
            />
        </>
    )
}



const mapStateToProps = (state) => {
    return {
        result: state.resultConver.result,
        currentCurrency: state.resultConver.currentCurrency,
        changeCurrency: state.resultConver.changeCurrency,
        newMessText: state.resultConver.newMessText,
        resultCurrency: state.resultConver.resultCurrency,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        getNewCourse: () => {
            dispatch(getCourse())
        },
        onupdateText: (body) => {
            dispatch(actionUpdateMessText(body))
        },
        onupdateCourse: (newresult) => {
            dispatch(actionCourse(newresult))
        },
        onCurrentCurrency: (result) => {
            dispatch(actionCurrentCurrency(result))
        },
        onChangeCurrency: (result) => {
            dispatch(actionChangeCurrency(result))
        },
        onResultCurrency: (result) => {
            dispatch(actionResultCurrency(result))
        }
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(ExchangeContainer)

