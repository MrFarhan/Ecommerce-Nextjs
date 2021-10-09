import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./EyeHeartGroup.module.scss";

const EyeHeartGroup = () => {
  const [heartFill, setHeartFill] = useState(false);
  return (
    <div className={styles.eyeHeartGroupMain}>
      <span className={styles.eye}>
        <span className={styles.icon}>
          <IoMdEye size="21px" />{" "}
        </span>
      </span>
      <span
        className={styles.heart}
        onClick={() => setHeartFill((prev) => !prev)}
      >
        {heartFill ? (
          <span className={styles.icon}>
            <AiFillHeart color={"red"} size="21px" />
          </span>
        ) : (
          <span className={styles.icon}>
            <AiOutlineHeart size="21px" />
          </span>
        )}
      </span>
    </div>
  );
};

export default EyeHeartGroup;
