import React, {FC, useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import st from './Exchange.module.css'
import {actionUpdateMessText, actionCurrentCurrency, actionChangeCurrency, actionResultCurrency, getCourse} from '../../../redux/number-reducer'
import {currentTypeSelector} from '../../hooks/cyrrentTypeSelector'


const Exchange: FC = () => {


    
    const dispatch=useDispatch()
     useEffect(() => {
           dispatch(getCourse()) 
    }, []);

const {changeCurrency,newMessText,currentCurrency,result,resultCurrency}=currentTypeSelector(state=>state.resultConver)





    const updateText = (event:any) => {
        let body:number = event.currentTarget.value
        console.log(typeof body)
       dispatch(actionUpdateMessText(body))

    }

    let onCurentValut = (valut: string) => {
        let change:any = result.filter(v => v.txt === valut)
        dispatch(actionCurrentCurrency(change[0].rate))

    }

    let onChangeValut = (valut:string) => {
        let change:any = result.filter(v => v.txt === valut)
        dispatch(actionChangeCurrency(change[0].rate))

    }

    const conv = () => {
        let a: number|number[]
        let b:number|number[]
        let f:number|number[] 
        let c:number|number[]

        if (currentCurrency.length == 0) {
            a = result[0].rate
        }
        else {
            a = currentCurrency;
        }
        if (changeCurrency.length == 0) {
            b = result[0].rate
        } else {
            b = changeCurrency;
        }
         c= newMessText
        
        f= (+a / +b) * +c
        
        let val:any = (f.toFixed(1))
        return dispatch(actionResultCurrency(val));

    }






    return (
        <div className={st.container}>
            <div className={st.form}>
                <div className={st.formContainer}>
                    <div className={st.bodyContainer}>
                        <div >
                            <div>
                                <form className={st.selected}>
                                    <select id="country" name="country">
                                        {result.map(n => {
                                            return <option value={n.txt} onClick={() => { onCurentValut(n.txt) }}>
                                                {n.txt}</option>
                                        })}
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className={st.choice}>
                            <div>
                                <form className={st.selected}>
                                    <select id="country" name="country">
                                        {result.map(n => {
                                            return <option value={n.txt} onClick={() => { onChangeValut(n.txt) }}> {n.txt}</option>
                                        })}
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={st.formContainer}>
                    <div className={st.bodyContainer}>
                        <div >
                            <div>
                                <div className={st.text}>
                                    <textarea name="" id="" cols={30} rows={10} onChange={updateText} value={newMessText}/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={st.choice}>
                            <div>
                                <div className={st.text}>
                                    <textarea cols={30} rows={10}  value={resultCurrency} ></textarea>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={st.buttonchoice}>
                    <div className={st.bodyContainer}>
                        <div className={st.selected}>
                            <button onClick={() => { conv() }}>
                                Exchange

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exchange