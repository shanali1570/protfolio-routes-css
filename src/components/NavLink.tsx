import Link from "next/link";
import styles from "../styles/NavLink.module.css";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className={styles.link}>
      {title}
    </Link>
  );
};

export default NavLink;
