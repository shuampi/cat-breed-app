import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CollectionCats from '../components/collectioncats'
import Footer from '../components/footer'
import MainBreed from '../components/mainbreed'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const API_KEY = process.env.NEXT_PUBLIC_KEY

interface HomeProps{
  catBreeds:any[];
  handelSearch: (e:React.ChangeEvent<HTMLInputElement>) => void,
  handleClick:()=> void,
  search:string
}


const Home= ({handelSearch, handleClick,search,catBreeds}:HomeProps) => {
  
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Breed App</title>
        <meta name="description" content="Created by Shuampi" />
      
      </Head>

      <NavBar
      handelSearch={handelSearch}
      handleClick={handleClick}
      search={search}
      />
      <div className={styles.breedDayContainer}>
      <h1 className={styles.breedDay}>Breed of The Day</h1>
      </div>
      <MainBreed 
      image={catBreeds[31].image.url} 
      breedName={catBreeds[31].name} 
      description={catBreeds[31].description} 
      url={catBreeds[31].cfa_url} 
      origin={catBreeds[31].origin} 
      temperament={catBreeds[31].temperament}
      lifeSpan={catBreeds[31].life_span}    
      />
      <h1  className={styles.breedDay}>Cat Breeds Around The World</h1>
      <p  className={styles.subtitle}>Click on an image for more Information</p>

      <CollectionCats
      catBreeds={catBreeds}
      />

      <Footer/>

     
    </div>
  )
}

export async function getStaticProps() {
  const catResponse = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`);
  const catBreeds= await catResponse.json();
  
  
  return {
    props: {catBreeds}, // will be passed to the page component as props
  
    
  }
}

export default Home
