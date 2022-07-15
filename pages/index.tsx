import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// components
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Experience } from '../components/experience';

const Home: NextPage = () => {
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
                <About />
                <Experience />
            </main>

            <footer className={styles.footer}>
            </footer>
        </>
    )
}

export default Home
