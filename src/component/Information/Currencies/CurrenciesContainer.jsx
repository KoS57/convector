import React, { useEffect } from 'react'
import { getCourse } from '../../../redux/number-reducer'
import { connect } from 'react-redux'
import Currencies from './Currencies'


const CurrenciesContainer = (props) => {
    useEffect(() => {
        props.getNewCourse()
    }, []);

    return (
        <Currencies
            result={props.result}
            getNewCourse={props.getNewCourse}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        result: state.resultConver.result,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        getNewCourse: () => {
            dispatch(getCourse())
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesContainer)