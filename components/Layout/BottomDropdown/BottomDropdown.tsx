import React from "react";
import styles from "./BottomDropdown.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { bottomDropdownItems } from "./BottomDropdown.helper";

interface Props {
  text?: string;
  background?: string;
}

const BottomDropdown = ({ text, background }: Props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div
      className={styles.BottomDropdownMain}
      onClick={() => setShowMenu(!showMenu)}
    >
      <nav>
        <span
          className={showMenu ? styles.categoryNavHovered : styles.categoryNav}
          style={{ background: background }}
        >
          <span className={styles.categoryNavHeading}>
            <BsFillGridFill size="20px"/>
            {text && <p>{text}</p>}
          </span>
          <AiOutlineRight />
        </span>
        <ul>
          {bottomDropdownItems?.map((item, index) => {
            return (
              <li key={index}>
                <span className={styles.bottomDropdownItemMain}>
                  <span className={styles.bottomDropdownItemImg}>
                    {" "}
                    {item?.image}
                  </span>
                  <span> {item?.heading}</span>
                </span>
                <span>
                  <AiOutlineRight />
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BottomDropdown;
