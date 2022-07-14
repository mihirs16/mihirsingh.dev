import { motion } from "framer-motion";
import styles from "../styles/button.module.css";

type ButtonProps = {
    text:       string,
};

export const Button = (props: ButtonProps) => {
    
    return (
        <motion.button 
            style={{ background: "#FFFFFF" }}
            className={styles.button} 
            whileHover={{ background: "#000000", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
        >
            <div>{ props.text }</div>
        </motion.button>
    );
};
