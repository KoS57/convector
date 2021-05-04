import Exchange from './Exchange'
import { getCourse, actionUpdateMessText,actionCourse,actionCurrentCurrency,actionChangeCurrency,actionResultCurrency } from '../../../redux/number-reducer'
import { connect } from 'react-redux'
// import {withAuthRedirect} from'../hoc/withAuthRedirerct'





const mapStateToProps=(state)=>{
    return {
        result:state.resultConver.result,
        newresult:state.resultConver.newresult,
        currentCurrency:state.resultConver.currentCurrency,
        changeCurrency:state.resultConver.changeCurrency,
        newMessText:state.resultConver.newMessText,
        resultCurrency:state.resultConver.resultCurrency,
        newMessText:state.resultConver.newMessText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        
        getNewCourse:()=>{
         dispatch(getCourse())
        } ,
        onupdateText:(body)=>{ 
            dispatch(actionUpdateMessText(body)) 
        },
        onupdateCourse:(newresult)=>{ 
            dispatch(actionCourse(newresult)) 
        } ,
        onCurrentCurrency:(result)=>{
            dispatch(actionCurrentCurrency(result))
        },
        onChangeCurrency:(result)=>{
            dispatch(actionChangeCurrency(result))
        },
        onResultCurrency:(result)=>{
            dispatch(actionResultCurrency(result))
        }
    }
}



const ExchangeContainer=connect(mapStateToProps,mapDispatchToProps)(Exchange)

export default ExchangeContainer

