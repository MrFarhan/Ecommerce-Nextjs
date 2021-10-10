import Image from "next/image";
import React, { FC } from "react";
import styles from "./CustomButton.module.scss";

interface Props {
  text: string;
  link?: string;
  background?: string;
  color?: string;
  width?: string;
  icon?: any;
}

const CustomButton: FC<Props> = ({
  text,
  link,
  background,
  color,
  width,
  icon,
}) => {
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
        {icon && <Image src={icon} alt="icon"/>} &nbsp;{text}
      </button>
    </a>
  ) : (
    <button
      style={{
        background: background,
        color: color,
        cursor: "pointer",
        width: width,
      }}
      className={styles.btn}
    >
      {icon && <Image src={icon} alt="icon"  />} &nbsp;{text}
    </button>
  );
};

export default CustomButton;
