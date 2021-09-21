import React,{FC} from "react";
import styles from "./Badge.module.scss";

type Props = {
  content: string;
  bgColor?: string;
  width?:string;
  color?:string;
}

const Badge:FC<Props> = ({content,bgColor,width,color}) => {
  return (
    <div className={styles.badgeMain} style={{background:bgColor, width:width,color:color}}>
      {content}
    </div>
  );
};

export default Badge;
