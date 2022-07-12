import type { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/hero.module.css";

// images
import profilePicture from "../public/images/avatar-img.svg";

export const Hero: NextComponentType = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.avatar}>
                <Image src={profilePicture} />
            </div>
            <div className={styles.title}>
                <h1>Mihir Singh</h1>
                <h2>engineer | developer | student</h2>
            </div>
        </div>
    );
};
