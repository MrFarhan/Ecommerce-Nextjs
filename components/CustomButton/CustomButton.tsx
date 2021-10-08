import React, { FC } from "react";
import styles from "./CustomButton.module.scss";

interface Props {
  text: string;
  link?: string;
  background?: string;
  color?: string;
  width?: string;
}

const CustomButton: FC<Props> = ({ text, link, background, color, width }) => {
  return link ? (
    <a href={link}>
      <button
        style={{
          width: width,
          background: background,
          color: color,
          cursor: "pointer",
        }}
        className={styles.btn}
      >
        {text}
      </button>
    </a>
  ) : (
    <button
      style={{ background: background, color: color, cursor: "pointer" }}
      className={styles.btn}
    >
      {text}
    </button>
  );
};

export default CustomButton;
