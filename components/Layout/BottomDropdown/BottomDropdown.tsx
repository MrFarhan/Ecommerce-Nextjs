import React from "react";
import styles from "./BottomDropdown.module.scss";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";

const BottomDropdown = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  console.log("show menu", showMenu);
  return (
    <div
      className={styles.BottomDropdownMain}
      onClick={() => setShowMenu(!showMenu)}
    >
      <nav>
        <span
          className={showMenu ? styles.categoryNavHovered : styles.categoryNav}
        >
          <BsFillGridFill />
          All Categories
          <AiOutlineRight />
        </span>
        <ul>
          <li>All Categories</li>
          <li>Car</li>
          <li>Electronics</li>
          <li>Laptop</li>
          <li>Desktop</li>
          <li>Camera</li>
          <li>Toys</li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomDropdown;
