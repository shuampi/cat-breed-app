import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import MainBreed from '../components/mainbreed'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const API_KEY = process.env.NEXT_PUBLIC_KEY

interface HomeProps{
  catBreeds:any;
}


const Home= ({catBreeds}:HomeProps) => {
  
  

console.log('catBreeds', catBreeds)
//console.log('catBreeds[0]', catBreeds[0].name)

  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Breed App</title>
        <meta name="description" content="Created by Shuampi" />
      
      </Head>
      <NavBar/>
      <h1>Bread of The Day</h1>
      <MainBreed 
      image={catBreeds[0].image.url} 
      breedName={catBreeds[0].name} 
      description={catBreeds[0].description} 
      url={catBreeds[0].cfa_url}      
      />
      <Footer/>

     
    </div>
  )
}

export async function getStaticProps() {
  const catResponse = await fetch(`https://api.thecatapi.com/v1/breeds`);
  const catBreeds= await catResponse.json();
  
  
  return {
    props: {catBreeds}, // will be passed to the page component as props
  
    
  }
}

export default Home
