import React, { useEffect, useState } from 'react'
import st from './Currencies.module.css'
import Valuta from '../Valuta/Valuta'
import axios from 'axios'


type SearchType = {

    r030: number,
    txt: string,
    rate: number,
    cc: string,
    exchangedate: Date

}




const Currencies = () => {


    const [current, setCurrent] = useState<SearchType[]>([])

    useEffect(() => {
        axios
            .get<SearchType[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
            .then(res => {
                setCurrent(res.data)
            })

    }, []);

   

    const valut = current.filter(person => {
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
    console.log(valut)

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

                            <div className={st.nameUa}>
                            UA
                            </div>
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
