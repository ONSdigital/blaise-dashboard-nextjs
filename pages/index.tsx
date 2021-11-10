import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";

// reactstrap components
import { Alert } from "reactstrap";



const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blaise Dashboard</title>
                <meta name="description" content="Blaise dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Alert color="success">
                <strong>Success!</strong> Blaise is up!
            </Alert>
        </div>
    )
}

export default Home
