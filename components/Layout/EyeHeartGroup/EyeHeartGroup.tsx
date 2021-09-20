import React from 'react'
import {IoMdEye} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import styles from "./EyeHeartGroup.module.scss"

const EyeHeartGroup = () => {
  return (
    <div className={styles.eyeHeartGroupMain}>
      <IoMdEye/> &nbsp; <AiOutlineHeart/>
    </div>
  )
}

export default EyeHeartGroup
