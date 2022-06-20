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
  
  

console.log('catBreeds', catBreeds)
//console.log('catBreeds[0]', catBreeds[0].name)
// const arrayOrigins = catBreeds.map(cat => cat.origin)
// console.log('arrayOrigins', arrayOrigins)


// const noDuplicateOrigins = arrayOrigins.filter((origin,index) =>{
//   return arrayOrigins.indexOf(origin) === index
// })

// console.log('noDuplicateOrigins', noDuplicateOrigins)

// const japanCats = catBreeds.filter(cat => cat.origin==="Japan")
// console.log('japanCats', japanCats)

// const unitedStateCats = catBreeds.filter(cat => cat.origin==="United States")
// console.log('eeuuCats', unitedStateCats)

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
      image={catBreeds[0].image.url} 
      breedName={catBreeds[0].name} 
      description={catBreeds[0].description} 
      url={catBreeds[0].cfa_url} 
      origin={catBreeds[0].origin} 
      temperament={catBreeds[0].temperament}
      lifeSpan={catBreeds[0].life_span}    
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
