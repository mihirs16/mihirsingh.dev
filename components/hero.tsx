import Image from "next/image";
import styles from "../styles/hero.module.css";

// images
import profilePicture from "../public/images/avatar-img.svg";
import sendIconSVG from "../public/icons/send-icon.svg";
import textIconSVG from "../public/icons/text-icon.svg";

// components
import { Button } from "./button";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.avatar}>
                <Image src={profilePicture} />
            </div>
            <div className={styles.title}>
                <h1>Mihir Singh</h1>
                <h2>engineer | developer | student</h2>
            </div>
            <div className={styles.btnGrp}>
                <Button colorHex="#FF8E87" text="contact" imgAlt="contact" imgSrc={ sendIconSVG }/>
                <Button colorHex="#70FFBA" text="resume"  imgAlt="resume" imgSrc={ textIconSVG } /> 
            </div>
        </div>
    );
};
