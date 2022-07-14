import Image from "next/image";
import styles from "../styles/about.module.css" 

// images
import globeIcon from "../public/icons/globe-icon.svg";

export const About = () => {
    return (
        <div className={styles.about}>
            <Image src={globeIcon} alt="about-icon" />
            <h2>about</h2>
            <div className={styles.aboutContent}>
                <p>
                i’m a computer science engineering graduate and currently pursuing my masters in computer science from the queen mary university of london. i’ve worked on a variety of software projects ranging from websites and apps to CRMs and code editors.
                </p>
                <p>
i love working on distributed systems and have been quite involved in backend development. i have exhibited versatility and creativity through designing systems and leadership skills through my voluntary and work experiences with teams and organisations.   
                </p>
            </div>
        </div>
    );
};
