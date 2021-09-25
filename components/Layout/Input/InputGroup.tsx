import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./InputGroup.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

const InputGroup = () => {
  return (
    <div className={styles.inputDropdownMain}>
      <span className={styles.searchIcon}><AiOutlineSearch className={styles.inputSearchIcon} size="15px"/></span>
      <input type="text" className={styles.inputMain} placeholder="Search for..." />
     <span className={styles.dropdown}> <Dropdown /></span>
    </div>
  );
};

export default InputGroup;
