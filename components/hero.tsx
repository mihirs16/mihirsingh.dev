import Image from "next/image";
import styles from "../styles/hero.module.css";

// images
import profilePicture from "../public/images/avatar-img.svg";

// components
import { Button } from "./button";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.avatar}>
                <Image src={profilePicture} alt="Mihir Singh" />
            </div>
            <div className={styles.title}>
                <h1>Mihir Singh</h1>
                <h2>engineer | developer | student</h2>
            </div>
            <div className={styles.btnGrp}>
                <Button text="contact" />
                <Button text="resume"  /> 
            </div>
        </div>
    );
};
