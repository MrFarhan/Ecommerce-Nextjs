import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import styles from "./Input.module.scss"


const Input = () => {
    return (
        <div>
            <input type="text" className={styles.input}/>
            <Dropdown/>
        </div>
    )
}

export default Input
