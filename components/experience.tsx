import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/experience.module.css';

// images
import briefcaseIcon from '../public/icons/briefcase-icon.svg';

// experience interface for each experience card
export interface ExperienceData {
    key:        number,
    company:    string,
    role:       string,
    dateRange:  string,
    details:    Array<string>
}

// experiences interface for list of experiences fetched
export interface Experiences {
    experiences: Array<ExperienceData>
}

interface ExperienceContent {
    content: Experiences
}

export const Experience = (props: ExperienceContent) => {
    const experiences = props.content.experiences; 
    const cardSet = experiences.map(experience => {
        return (<ExperienceCard 
            key={experience.key} 
            company={experience.company}
            role={experience.role}
            dateRange={experience.dateRange}
            details={experience.details}
        />);
    });

    return (
        <div className={styles.experience}>
            <Image src={briefcaseIcon} alt="experience" />
            <h2>experience</h2>
            <div className={styles.cardSet}>
                {cardSet}
            </div>
        </div>
    );
};

// ExperienceCard component for each experience
const ExperienceCard = (props: ExperienceData) => {
    
    const cardVariants = {
        hover: { background: '#000000' }
    };

    const defContentVariants = {
        hover: { display: 'none' }
    };

    const altContentVariants = {
        hover: { display: 'block' }
    }

    let detailIndex = 0;
    const details = props.details.map(detail => { return (
            <div key={detailIndex++} style={{ marginBottom: '10px' }}>
                - {detail}
            </div>
        ); 
    });

    return (
        <motion.div 
            className={styles.expCard} 
            style={{ background: '#FFFFFF' }}
            whileHover='hover' 
            variants={cardVariants}
        >
            <motion.div className={styles.defContent} variants={defContentVariants}>
                <div>
                    <span 
                        style={{ fontWeight: 700, background: '#FBFF20' }}
                    >
                        {props.company}
                    </span><br/>
                    <span>{props.role}</span><br/>
                    <span>{props.dateRange}</span>
                </div>
                <div>
                    <span style={{ color: '#9E9C9C' }}>hover to learn more</span>
                </div>
            </motion.div>
            <motion.div className={styles.altContent} variants={altContentVariants}>
                {details}
            </motion.div>
        </motion.div>
    );
};
