// next js
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// components
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Experience, Experiences } from '../components/experience';

// lib
import { 
    getAboutContent,
    getExperienceContent
} from '../lib/notion';

interface PageContent {
    aboutContent: {
        __html: string
    },
    experienceContent: Experiences
};

export async function getServerSideProps () {
    return {
        props: {
            aboutContent: {
                __html: await getAboutContent()
            },
            experienceContent: await getExperienceContent()
        }
    }
}


const Home: NextPage<PageContent> = (props: PageContent) => {
    return (
        <>
            <Head>
                <title>Mihir Singh</title>
                <meta name="description" content="Mihir Singh | CS Engineer |  Developer | Student" />
                <meta name="color-scheme" content="light" />
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>"/>
            </Head>

            <main className={styles.main}>
                <Navbar />
                <Hero />
                <About content={props.aboutContent}/>
                <Experience content={props.experienceContent}/>
            </main>

            <footer className={styles.footer}>
            </footer>
        </>
    )
}

export default Home
