import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Breed App</title>
        <meta name="description" content="Created by Shuampi" />
      
      </Head>
      <NavBar/>
      <h1>Bread of The Day</h1>
      <Footer/>

     
    </div>
  )
}

export default Home
