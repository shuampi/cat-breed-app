import SecondaryBread from '../secondaryBreed';
import style from './index.module.css'

interface CollectionCatsProps{
    catBreeds:any;
}

const CollectionCats = ({catBreeds}:CollectionCatsProps) => {
  return (
    <div>
    <SecondaryBread 
    image={catBreeds[9].image.url} 
    breedName={catBreeds[9].name} 
    description={catBreeds[9].description} 
    url={catBreeds[0].cfa_url} 
    />

    </div>
  )
}

export default CollectionCats