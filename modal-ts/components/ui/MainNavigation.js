import Link from "next/link";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/issues'>Issues</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
