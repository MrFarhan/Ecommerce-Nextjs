import React,{FC} from "react";
import styles from "./Badge.module.scss";

type Props = {
  content: string;
  bgColor?: string;
}

const Badge:FC<Props> = ({content,bgColor}) => {
  return (
    <div className={styles.badgeMain} style={{background:bgColor}}>
      {content}
    </div>
  );
};

export default Badge;
