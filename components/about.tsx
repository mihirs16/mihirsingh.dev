import Image from "next/image";
import styles from "../styles/about.module.css" 

// images
import globeIcon from "../public/icons/globe-icon.svg";

interface AboutContent {
    content: {
        __html: string
    } 
}

export const About = (props: AboutContent) => {
    return (
        <div className={styles.about}>
            <Image src={globeIcon} alt="about-icon" />
            <h2>about</h2>
            <div dangerouslySetInnerHTML={props.content}  className={styles.aboutContent}> 
            </div>
        </div>
    );
};
