import Image from 'next/image';
import styles from '../styles/footer.module.css';

// components
import { Button } from './button';

// images
import githubIcon   from '../public/icons/github.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import twitterIcon  from '../public/icons/twitter.svg';


export const Footer = () => {
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

    return (
        <div className={styles.footer}>
            <div className={styles.upper}>
                <p>&reg; 2022, built and designed <br/> by mihir singh </p>
                <Button text='contact' /> 
                <Button text='resume' />
                <p className={styles.rightUpper}>no apis were harmed<br/> in the making</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.lower}>
                <Image src={linkedinIcon} alt='linkedin'/>
                <HorizontalLineSVG />
                <Image src={githubIcon} alt='github' />
                <HorizontalLineSVG />
                <Image src={twitterIcon} alt='twitter' />
            </div>
            </div>
        </div> 
    );
};
