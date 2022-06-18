import SecondaryBread from '../secondaryBreed';
import { SetStateAction, useState } from 'react';
import style from './index.module.css'

interface CollectionCatsProps{
    catBreeds:any[];
}

const CollectionCats = ({catBreeds}:CollectionCatsProps) => {
const [selection, setSelection] = useState("")
const handelSelection = (e: { target: { value: SetStateAction<string>; }; }) => setSelection(e.target.value)

  const arrayOrigins = catBreeds.map(cat => cat.origin)
  
  const noDuplicateOrigins = arrayOrigins.filter((origin,index) =>{
    return arrayOrigins.indexOf(origin) === index
  })
console.log('selection', selection)

  return (
    <div>
     <label>
        show cats by origin:  
        <select value={selection}  onChange={handelSelection}>
    <option  value="" disabled hidden>Select an option</option>
{noDuplicateOrigins.map( (origin,index) => <option key={index} value={origin}>{origin}</option>)}
        </select>
    </label>

    <SecondaryBread 
    image={catBreeds[9].image.url} 
    breedName={catBreeds[9].name} 
    description={catBreeds[9].description} 
    url={catBreeds[9].cfa_url}
    breedOrigin={catBreeds[9].origin} 
    />
     <SecondaryBread 
    image={catBreeds[25].image.url} 
    breedName={catBreeds[25].name} 
    description={catBreeds[25].description} 
    url={catBreeds[25].cfa_url}
    breedOrigin={catBreeds[25].origin}  
    />
    <SecondaryBread 
    image={catBreeds[39].image.url} 
    breedName={catBreeds[39].name} 
    description={catBreeds[39].description} 
    url={catBreeds[39].cfa_url} 
    breedOrigin={catBreeds[39].origin} 
    />
    <SecondaryBread 
    image={catBreeds[11].image.url} 
    breedName={catBreeds[11].name} 
    description={catBreeds[11].description} 
    url={catBreeds[11].cfa_url} 
    breedOrigin={catBreeds[11].origin} 
    />
      <SecondaryBread 
    image={catBreeds[12].image.url} 
    breedName={catBreeds[12].name} 
    description={catBreeds[12].description} 
    url={catBreeds[12].cfa_url} 
    breedOrigin={catBreeds[12].origin} 
    />
    <SecondaryBread 
    image={catBreeds[56].image.url} 
    breedName={catBreeds[56].name} 
    description={catBreeds[56].description} 
    url={catBreeds[56].cfa_url} 
    breedOrigin={catBreeds[56].origin} 
    />
    <SecondaryBread 
    image={catBreeds[60].image.url} 
    breedName={catBreeds[60].name} 
    description={catBreeds[60].description} 
    url={catBreeds[60].cfa_url} 
    breedOrigin={catBreeds[60].origin} 
    />
    <SecondaryBread 
    image={catBreeds[37].image.url} 
    breedName={catBreeds[37].name} 
    description={catBreeds[37].description} 
    url={catBreeds[37].cfa_url} 
    breedOrigin={catBreeds[37].origin} 
    />
    </div>
  )
}

export default CollectionCats