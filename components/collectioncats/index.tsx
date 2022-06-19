import SecondaryBread from '../secondaryBreed';
import { SetStateAction, useState } from 'react';
import style from './index.module.css'

interface CollectionCatsProps{
    catBreeds:any[];
}

const CollectionCats = ({catBreeds}:CollectionCatsProps) => {

const [selection, setSelection] = useState("")
const [swap, setSwap] = useState(false)
const handelSelection = (e: { target: { value: SetStateAction<string>; }; }) => {setSelection(e.target.value); setSwap(true)}

  const arrayOrigins = catBreeds.map(cat => cat.origin)
  
  const noDuplicateOrigins = arrayOrigins.filter((origin,index) =>{
    return arrayOrigins.indexOf(origin) === index
  })

  const singleOriginCats = catBreeds.filter(cat => cat.origin=== selection)
  const idSingleOriginCats = singleOriginCats.map(cat => cat.id)


// console.log('selection', selection)
// console.log('singleOriginCats', singleOriginCats)
// console.log('idSingleOriginCats', idSingleOriginCats)


  return (
    <div className={style.collection}>
     <label className={style.label}>
        show cats by origin:  
        <select className={style.select} value={selection}  onChange={handelSelection}>
    <option  value="" disabled hidden>Select an option</option>
{noDuplicateOrigins.map( (origin,index) => <option key={index} value={origin}>{origin}</option>)}
        </select>
    </label>
    <div className={style.container}>
    {
      !swap &&(
      catBreeds.map((cat,index) =>{
        if(catBreeds.indexOf(cat)<9){
         
          return<SecondaryBread 
        key={catBreeds[index].name}
        image={catBreeds[index].image.url} 
        breedName={catBreeds[index].name} 
        description={catBreeds[index].description} 
        url={catBreeds[index].cfa_url}
        breedOrigin={catBreeds[index].origin} 
        /> 
        }
      })
      )
    }
    </div>

    <div className={style.container}>
      { swap && (
      singleOriginCats.map((cat,index) =>{
        if(singleOriginCats.indexOf(cat)<9){
          
         
          return <SecondaryBread 
        key={singleOriginCats[index].name}
        image={singleOriginCats[index].image===undefined? "https://cdn2.thecatapi.com/images/hBXicehMA.jpg" :singleOriginCats[index].image.url } 
        breedName={singleOriginCats[index].name} 
        description={singleOriginCats[index].description} 
        url={singleOriginCats[index].cfa_url}
        breedOrigin={singleOriginCats[index].origin} 
        />
      }
    })
      )
  }
    </div>

</div>
  )
}

export default CollectionCats;

