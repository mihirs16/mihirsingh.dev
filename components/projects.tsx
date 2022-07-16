import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/project.module.css';

// images
import gitPRIcon from '../public/icons/git-pr-icon.svg';
import arrowIcon from '../public/icons/arrow-out.svg'; 
import mLinkIcon from '../public/icons/major-link-arrow.svg';

// interface for each project card data
export interface ProjectCard {
    key:            number,
    name:           string,
    description:    string,
    tools:          string,
    url:            string
};

// interface for projects content
export interface ProjectCards {
    projects: Array<ProjectCard>
};

// interface for props
interface ProjectContent {
    content: ProjectCards
}; 

export const Projects = (props: ProjectContent) => {
    const dummyVariants = { hover: {} };
    const textVariants  = { hover: {
        color: "#fff",
        background: "#000"
    } };

    const projects = props.content.projects;
    const cardSet = projects.map(project => {
        return (
            <a href={project.url} key={project.key}>
                <motion.div 
                    className={styles.card} 
                    whileHover="hover" 
                    variants={dummyVariants}
                >
                    <h3>
                        <motion.span 
                            variants={textVariants} 
                            style={{ background: "#FBFF20" }}
                        >
                            {project.name}
                        </motion.span>
                    </h3>
                    <p style={{ color: "#9C9A9A" }}>
                        {project.description}
                    </p>
                    <div className={styles.bottomSectionCard}>
                        <p>
                            {project.tools}
                        </p>
                        <div style={{ minWidth: '20px', marginBottom: '10px' }}>
                            <Image src={arrowIcon} alt='link ->' />
                        </div>
                    </div> 
                </motion.div> 
            </a>
        );
    });

    return (
        <div className={styles.projects}>
            <Image src={gitPRIcon} alt="projects" />
            <h2>projects</h2>
            <div className={styles.cardSet}>
                {cardSet} 
                    <motion.a 
                        href='https://github.com/mihirs16' 
                        className={styles.cardSetFooter}
                        whileHover="hover"

                    >
                        <motion.div 
                            variants={textVariants} 
                            style={{ 
                                marginRight: '10px', 
                                background: "#fff" 
                            }}
                        >
                           other projects @github
                        </motion.div>
                        <Image src={mLinkIcon} alt="->" />
                    </motion.a>
           </div>
        </div>
    );
}

