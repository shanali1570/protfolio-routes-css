import React from "react";
import NavLink from "../components/NavLink";
import styles from "../styles/MenuOverlay.module.css";

interface LinkProps {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkProps[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className={styles.overlay}>
      {links.map((link, index) => (
        <li key={index} className={styles.overlayItem}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
