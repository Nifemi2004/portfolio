"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  let [items, setItems] = React.useState({
    activeItem: null,
    activeItem2: null,
  });

  const handleMouseEnter = (index: any) => {
    setItems({ ...items, activeItem2: index });
    setIsHovered(true);
  };

  const handleMouseLeave = (index: any) => {
    setItems({ ...items, activeItem2: index });
    setIsHovered(false);
  };

  const handleClick = (index: any) => {
    setItems({ activeItem: index, activeItem2: null });
  };

  const navItems = ["HOME", "ABOUT ME", "SKILLS", "PROJECTS", "CONTACT ME"];

  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={index}
            className={`${styles.navItem} ${
              items.activeItem === index ? styles.active : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <Link href={`#${item}`}>{item}</Link>
            <div
              id={item}
              className={`${
                items.activeItem !== index &&
                isHovered &&
                items.activeItem2 === index
                  ? styles.navLineHover
                  : ""
              }
          `}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
