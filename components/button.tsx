import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/button.module.css";

type ButtonProps = {
    colorHex:   string,
    text:       string,
    imgSrc:     string | StaticImageData,
    imgAlt:     string,
};

export const Button = (props: ButtonProps) => {
    return (
        <motion.button 
            className={styles.button} 
            style={{ background: props.colorHex }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div>{ props.text }</div>
            <Image src={props.imgSrc} alt={props.imgAlt}/>
        </motion.button>
    );
};
