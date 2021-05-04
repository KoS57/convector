import React from 'react'
import st from './Valuta.module.css'




const Valute = (props) => {
    return (
        <div>
            <div className={st.formContainer}>
                <div className={st.bodyContainer}>
                    <div className={st.choice}> 
                        {props.name}
                    </div>
                    <div className={st.choice}> 
                        {props.valute}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Valute
