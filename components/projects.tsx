import Image from 'next/image';
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
    const projects = props.content.projects;
    const cardSet = projects.map(project => {
        return (
            <a href={project.url}>
                <div className={styles.card}>
                    <h3><span style={{ background: "#FBFF20" }}>{project.name}</span></h3>
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
                </div> 
            </a>
        );
    });

    return (
        <div className={styles.projects}>
            <Image src={gitPRIcon} alt="projects" />
            <h2>projects</h2>
            <div className={styles.cardSet}>
                {cardSet} 
                    <a href='https://github.com/mihirs16' className={styles.cardSetFooter}>
                       <div style={{ marginRight: '10px' }}>
                           other projects @github
                       </div>
                       <Image src={mLinkIcon} alt="->" />
                    </a>
           </div>
        </div>
    );
}

