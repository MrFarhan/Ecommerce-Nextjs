import React from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [item, setItem] = React.useState("");
  return (
    <div className={styles.dropdownMain} onClick={() => setShowMenu(!showMenu)}>
      <nav>
        <span className={styles.categoryNav}>
          <select onChange={(e) => setItem(e.target.value)}>
            <option value="">All Categories</option>
            <option value="">Car</option>
            <option value="">Electronics</option>
            <option value="">Laptop</option>
            <option value="">Desktop</option>
            <option value="">Camera</option>
            <option value="">Toys</option>
            <option value="">Year</option>
          </select>
        </span>
      </nav>
    </div>
  );
};

export default Dropdown;
