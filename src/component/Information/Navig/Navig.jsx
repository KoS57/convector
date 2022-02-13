import React from 'react'
import st from './Navig.module.css'
import { NavLink } from 'react-router-dom'



const Navig = () => {
    return (
        <div className={st.mainContainer}>
            <div className={st.container}>
                <nav className={st.menu__body}>
                    <ul className={st.menu__list}>
                        <li><NavLink to="/exchange" className={st.menu__link} activeClassName={st.selected}>Exchange</NavLink ></li>
                        <li><NavLink to="/currencies" className={st.menu__link} activeClassName={st.selected}>Сurrencies</NavLink ></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navig


