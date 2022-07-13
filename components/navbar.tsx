import styles from "../styles/navbar.module.css";
import Image from "next/image";

// images
import menuBtn from "../public/icons/menu-btn.svg";

export const Navbar = () => {
   return (
   <div className={styles.navbar}>
        <div>
            <h1 className={styles.heading1}>MS</h1>
        </div>
        <Image src={menuBtn} alt="menu"/>
   </div>
   );
};
