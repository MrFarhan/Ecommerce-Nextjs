import React,{FC} from "react";
import styles from "./Badge.module.scss";

type Props = {
  content: string;
  bgColor?: string;
  width?:string;
  height?:string;
  color?:string;

}

const Badge:FC<Props> = ({content,bgColor,width,height,color}) => {
  return (
    <div className={styles.badgeMain} style={{background:bgColor, width:width,color:color, height:height}}>
      {content}
    </div>
  );
};

export default Badge;
