import React, { FC } from 'react'
import st from './Valuta.module.css'

interface ValutProps{
    name:string,
    valute:number
}


const Valute:FC <ValutProps>= ({name,valute}) => {
    return (
        <div>
            <div className={st.formContainer}>
                <div className={st.bodyContainer}>
                    <div className={st.choice}> 
                        {name}
                    </div>
                    <div className={st.choice}> 
                        {valute}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Valute
