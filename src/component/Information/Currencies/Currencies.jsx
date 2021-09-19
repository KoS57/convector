import React from 'react'
import st from './Currencies.module.css'
import Valuta from '../Valuta/Valuta'





const Currencies = (props) => {

    const valut = props.result.filter(person => {
        if (person.cc === "USD") {
            return true
        } else if (person.cc === "EUR") {
            return true
        } else if (person.cc === "RUB") {
            return true
        } else if (person.cc === "PLN") {
            return true
        }

    }
    )





    const currenciesElement = valut.map((c) => {
        return <Valuta valute={c.rate} name={c.cc} />
    })
    return (
        <div>
            <div className={st.container}>
                <div className={st.form}>
                    <div className={st.formContainer}>
                        <div className={st.headContainer}>
                            <div>
                                <div className={st.nameValuta}>Valuta</div>
                            </div>

                            <div className={st.nameUa}>UA</div>
                        </div>

                        <div>
                            {currenciesElement}

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Currencies
