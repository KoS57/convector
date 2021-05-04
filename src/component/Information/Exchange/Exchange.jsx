import React,{useEffect,useState} from 'react'
import st from './Exchange.module.css'



const Exchange = (props) => {
    
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData=()=>{
            props.getNewCourse()
            setData(props.result)
            

        }
        fetchData();
    },[]);

   


    let updateText = (event) => {
        let body = event.target.value
        console.log(typeof body)
        props.onupdateText(body)
    }
let onCurentValut=(valut)=>{
   let change= props.result.filter(v => v.txt===valut)
   props.onCurrentCurrency(change[0].rate)
}

let onChangeValut=(valut)=>{
    let change= props.result.filter(v => v.txt===valut)
    props.onChangeCurrency(change[0].rate)
 }

const conv=()=>{
    let a
    let b

    if (props.currentCurrency.length == 0){
        a=props.result[0].rate
    }
    else{
        a=props.currentCurrency;
    }
    if (props.changeCurrency.length == 0){
        b= props.result[0].rate
    }else{
        b=props.changeCurrency;
    }
    let c=props.newMessText
   let f=(a/b)*c;
   let val=( f.toFixed(1) )
   return  props.onResultCurrency(val);
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
                                       { props.result.map(n=>{
                                           return  <option value={n.txt} onClick={()=>{onCurentValut(n.txt)}}>
                                               {n.txt}</option> })}
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className={st.choice}>
                        <div>
                                <form className={st.selected}>
                                    <select id="country" name="country">
                                       { props.result.map(n=>{
                                           return <option value={n.txt} onClick={()=>{onChangeValut(n.txt)}}> {n.txt}</option> })}
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
                                <div>
                                    <textarea type="number"   name="" id="" cols="30" rows="10" onChange={updateText} ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className={st.choice}>
                            <div>
                                <div>
                                    <textarea name="" id="" cols="30" rows="10" value={props.resultCurrency}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={st.buttonchoice}>
                    <div className={st.bodyContainer}>
                        <div>
                            <button  onClick={() => { conv() }}>
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