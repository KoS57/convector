import React from 'react'
import rose from '../img/rose.png'
import st from './Header.module.css'

const Header = () => {
    return (
        <div className={st.maincontainer}>
            <div className={st.container}>
                <div>
                    <img src={rose} alt="" className={st.foto} />
                </div>
                <div className={st.text}>
                    <h1>SK converter</h1>
                </div>
            </div>
        </div>
    )
}

export default Header