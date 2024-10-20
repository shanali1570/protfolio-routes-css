"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "../components/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../components/MenuOverlay";
import styles from "../styles/Navbar.module.css";

type NavLink = {
  title: string;
  path: string;
};

const navLinks: NavLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.brand}>
          S.M.SHAN-E-ALI
        </Link>
        <div className={styles.mobileMenu}>
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={styles.button}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={styles.button}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className={styles.menu} id="navbar">
          <ul className={styles.menuList}>
            Menu
            {navLinks.map((link, index) => (
              <li key={index} className={styles.menuItem}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
