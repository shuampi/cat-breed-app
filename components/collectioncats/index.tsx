import SecondaryBread from '../secondaryBreed';
import style from './index.module.css'

interface CollectionCatsProps{
    catBreeds:any[];
}

const CollectionCats = ({catBreeds}:CollectionCatsProps) => {


// const generateNumber=() => Math.floor(Math.random() * catBreeds.length - 1)
// let newNumber =generateNumber()
// const shortArray = catBreeds.slice(newNumber,newNumber + 7)
// console.log('shortArray', shortArray)


  return (
    <div>
    <SecondaryBread 
    image={catBreeds[9].image.url} 
    breedName={catBreeds[9].name} 
    description={catBreeds[9].description} 
    url={catBreeds[9].cfa_url} 
    />
     <SecondaryBread 
    image={catBreeds[25].image.url} 
    breedName={catBreeds[25].name} 
    description={catBreeds[25].description} 
    url={catBreeds[25].cfa_url} 
    />
    <SecondaryBread 
    image={catBreeds[39].image.url} 
    breedName={catBreeds[39].name} 
    description={catBreeds[39].description} 
    url={catBreeds[39].cfa_url} 
    />
    <SecondaryBread 
    image={catBreeds[11].image.url} 
    breedName={catBreeds[11].name} 
    description={catBreeds[11].description} 
    url={catBreeds[11].cfa_url} 
    />
      <SecondaryBread 
    image={catBreeds[12].image.url} 
    breedName={catBreeds[12].name} 
    description={catBreeds[12].description} 
    url={catBreeds[12].cfa_url} 
    />
    <SecondaryBread 
    image={catBreeds[56].image.url} 
    breedName={catBreeds[56].name} 
    description={catBreeds[56].description} 
    url={catBreeds[56].cfa_url} 
    />
    <SecondaryBread 
    image={catBreeds[60].image.url} 
    breedName={catBreeds[60].name} 
    description={catBreeds[60].description} 
    url={catBreeds[60].cfa_url} 
    />
    <SecondaryBread 
    image={catBreeds[37].image.url} 
    breedName={catBreeds[37].name} 
    description={catBreeds[37].description} 
    url={catBreeds[37].cfa_url} 
    />
    </div>
  )
}

export default CollectionCats