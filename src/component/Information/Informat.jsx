import React from 'react'
import st from './Informat.module.css'
import Navig from './Navig/Navig'


const Informat = (props) => {
    return (
        <div className={st.container}>
            <div className={st.blok}>
                <Navig />

            </div>
        </div>
    )
}

export default Informat