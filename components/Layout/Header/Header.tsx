import React from 'react'
import styles from "./header.module.scss"
import HeaderBottom from './HeaderBottom/HeaderBottom'
import HeaderCenter from './HeaderCenter/HeaderCenter'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {
    return (
        <div className={styles.header}> 
            <HeaderTop/>
            <HeaderCenter/>
            <HeaderBottom/>
        </div>
    )
}

export default Header
