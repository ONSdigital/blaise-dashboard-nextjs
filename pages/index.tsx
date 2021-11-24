import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from "react";

// reactstrap components
import Health from "./health";



const Home: NextPage = () => {
    const [gifUrl, setGifUrl] = useState<string>("")
    useEffect(() => {
        fetch(giphy).then((response) => {
            response.json().then((data) => {
                setGifUrl(data.data[Math.floor((Math.random() * 100))].id)
            })
        })
    }, [])


    return (
        <div className={styles.container}>
            <Head>
                <title>Blaise Dashboard</title>
                <meta name="description" content="Blaise dashboard"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Health/>
            {
                gifUrl !== "" && <img src={`https://media0.giphy.com/media/${gifUrl}/giphy.gif`}/>
            }
        </div>
    )
}

export default Home

