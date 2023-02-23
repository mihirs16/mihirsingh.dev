import Image from 'next/image';
import styles from '../styles/footer.module.css';

// components
import { Button } from './button';

// images
import githubIcon   from '../public/icons/github.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import twitterIcon  from '../public/icons/twitter.svg';


export const Footer = (props: { resumeLink: string }) => {
    const HorizontalLineSVG = () => {
        return (
            <div className={styles.horizontalLineSVG}>
                <svg width="80px" height='24px'>
                      <line 
                            x1="0" y1="12.5px" 
                            x2="80px" y2="12.5px" 
                            style={{ stroke: '#000' }}
                        />
                </svg>
            </div>
        );
    };   

    const resumeDriveLink: string = props.resumeLink;
    return (
        <div className={styles.footer}>
            <div className={styles.upper}>
                <div>
                    <p className={styles.parabreaks}>&reg; 2022, built and designed</p>
                    <p className={styles.parabreaks}>by mihir singh</p>
                </div>
                <a href="mailto:hello@mihirsingh.dev" ><Button text='contact' /></a> 
                <a href={resumeDriveLink} ><Button text='resume' /></a>
                <div className={styles.rightUpper}>
                    <p className={styles.parabreaks}>no apis were harmed</p>
                    <p className={styles.parabreaks}>in the making</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.lower}>
                <a href="https://www.linkedin.com/in/mihir-singh-456a5916a/"><Image src={linkedinIcon} alt='linkedin'/></a>
                <HorizontalLineSVG />
                <a href="https://github.com/mihirs16"><Image src={githubIcon} alt='github' /></a>
                <HorizontalLineSVG />
                <a href="https://twitter.com/__heheboi__"><Image src={twitterIcon} alt='twitter' /></a>
            </div>
            </div>
        </div> 
    );
};
