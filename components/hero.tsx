import Image from "next/image";
import styles from "../styles/hero.module.css";

// images
import profilePicture from "../public/images/avatar-img.svg";

// components
import { Button } from "./button";

export const Hero = (props: { resumeLink: string }) => {
    const resumeDriveLink: string = props.resumeLink;
    return (
        <div className={styles.hero}>
            <div className={styles.avatar}>
                <Image priority src={profilePicture} alt="Mihir Singh" />
            </div>
            <div className={styles.title}>
                <h1>Mihir Singh</h1>
                <h2>engineer | developer | student</h2>
            </div>
            <div className={styles.btnGrp}>
                <a href="mailto:hello@mihirsingh.dev"><Button text="contact" /></a>
                <a href={resumeDriveLink}><Button text="resume" /></a> 
            </div>
        </div>
    );
};
