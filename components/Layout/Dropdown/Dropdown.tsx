import React from 'react'
import styles from "./Dropdown.module.scss"
import { BiChevronDown } from "react-icons/bi";



const Dropdown = () => {
    return (
        <div className={styles.dropdownMain}>Dropdown here <BiChevronDown/>
            {/* <div>Item 1</div>    
            <div>Item 1</div>    
            <div>Item 1</div>    
            <div>Item 1</div>    
            <div>Item 1</div>     */}
        </div>
    )
}

export default Dropdown
