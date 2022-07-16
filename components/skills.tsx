import Image, {StaticImageData} from 'next/image';
import styles from '../styles/skills.module.css';

// images
import toolIcon     from '../public/icons/tool-icon.svg';
import frontendIcon from '../public/icons/monitor-icon.svg';
import backendIcon  from '../public/icons/server-icon.svg';
import dataIcon     from '../public/icons/bar-graph-icon.svg';
import cloudIcon    from '../public/icons/cloud-icon.svg';
import scriptIcon   from '../public/icons/script-icon.svg';
import dbIcon       from '../public/icons/db-icon.svg';

// interface for skills content
export interface SkillsContent {
    backend:    Array<string>,
    frontend:   Array<string>,
    cloud:      Array<string>,
    data:       Array<string>,
    scripting:  Array<string>,
    database:   Array<string>
};

// interface for props of each skill card 
interface SkillCardContent {
    titleImg:   StaticImageData,
    skills:     Array<string>
}

// skill section component
export const Skills = (props: SkillsContent) => {
    return (
        <div className={styles.skills}>
            <Image src={toolIcon} alt="skills-icon" />
            <h2>skills</h2>
            <div className={styles.cardSet}>
                <SkillCard titleImg={frontendIcon} skills={props.frontend}/>
                <SkillCard titleImg={cloudIcon} skills={props.cloud}/>
                <SkillCard titleImg={backendIcon} skills={props.backend}/>
                <SkillCard titleImg={dbIcon} skills={props.database}/>
                <SkillCard titleImg={dataIcon} skills={props.data}/>
                <SkillCard titleImg={scriptIcon} skills={props.scripting}/>
            </div>
        </div>
    );
};

// component for each skillset card
const SkillCard = (props: SkillCardContent) => {
    let dummyKey = 0;
    const listOfSkills = props.skills.map((skill: string) => {
        return (
            <div key={dummyKey++}>{skill}</div>
        );
    });
    
    return (
        <div className={styles.skillCard}>
            <div style={{ marginBottom: '20px' }}>
                <Image src={props.titleImg} alt='skillset' />
            </div> 
            {listOfSkills}
        </div>
    );
};
