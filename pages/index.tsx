// next js
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// components
import { Navbar }                   from '../components/navbar';
import { Hero }                     from '../components/hero';
import { About }                    from '../components/about';
import { Experience, Experiences }  from '../components/experience';
import { Projects, ProjectCards }   from '../components/projects';
import { Skills, SkillsContent }    from '../components/skills';
import { Footer }                   from '../components/footer';

// lib
import { 
    getAboutContent,
    getExperienceContent,
    getProjectsContent,
    getSkillsContent,
    getResumeLink
} from '../lib/notion';

// interface for data that populates the page
interface PageContent {
    aboutContent: {
        __html: string
    },
    experienceContent: Experiences,
    projectsContent: ProjectCards,
    skillsContent: SkillsContent,
    resumeLink: string
};

export async function getStaticProps () {
    return {
        props: {
            aboutContent: {
                __html:         await getAboutContent()
            },
            experienceContent:  await getExperienceContent(),
            projectsContent:    await getProjectsContent(),
            skillsContent:      await getSkillsContent(),
            resumeLink:         await getResumeLink()
        }
    }
}


const Home: NextPage<PageContent> = (props: PageContent) => {
    return (
        <>
            <Head>
                <meta name="og:url" content="https://mihirsingh.netlify.com" />
                <meta name="og:image" content="https://mihirsingh.netlify.com/images/og-meta-img.png" />
                <meta name="og:title" content="Mihir Singh" />
                <meta name="og:description" content="I am a Computer Science Engineering graduate and currently an MSc. student at Queen Mary University of London. I love working with distributed systems and have a knack for backend development." />
                <meta name="og:type" content="Portfolio" />
                <meta name="twitter:card" content="summary" />
                <title>Mihir Singh</title>
                <meta name="description" content="I am a Computer Science Engineering Graduate and currently MSc. student at Queen Mary University London. I love working with distributed systems and have a knack for backend development." />
                <meta name="color-scheme" content="light" />
                <meta name="keywords" content="Backend, Fullstack, Azure, Heroku, Salesforce, Node.js, JavaScript, React, Next.js, Python, Flask, GitHub, Systems, Design, Software"/>
                <meta name="author" content="Mihir Singh" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"/>
            </Head>

            <main className={styles.main}>
                <Navbar />
                <Hero resumeLink={props.resumeLink}/>
                <About content={props.aboutContent}/>
                <Experience content={props.experienceContent}/>
                <Projects content={props.projectsContent}/>
                <Skills {...props.skillsContent}/>
                <Footer resumeLink={props.resumeLink}/>
            </main>

            <footer className={styles.footer}>
            </footer>
        </>
    )
}

export default Home
