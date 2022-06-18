// to share states between pages you need to set the hook and the state in


import '../styles/globals.css'

import type { AppProps } from 'next/app'
import {useState} from "react"

const API_KEY= process.env.NEXT_PUBLIC_KEY

function MyApp({ Component, pageProps }: AppProps) {
  const [photosFound, setPhotosFound] = useState([])
  const [search, setSearch] = useState("")

  const handelSearch = (e:React.ChangeEvent<HTMLInputElement>) =>  setSearch(e.target.value)

  const handleClick = () =>{  
    
    fetchData(search)}

  const fetchData = async(search:string) =>{
    const inputBreedSearch = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${search}&api_key=${API_KEY}`)
    const Data = await inputBreedSearch.json();
    let dataID
    if(Data.length === 0){
       dataID=""
    }else{
      dataID = Data[0].id
    }
    
    console.log('Data', Data)
  
    const imagesBreed = await fetch(`https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${dataID}`)
    const arrayImage = await imagesBreed.json()
    setPhotosFound(arrayImage)
  }

  return <Component {...pageProps} 
  handelSearch={handelSearch}
  handleClick={handleClick}
  search={search}
  photosFound={photosFound}
  />
}

export default MyApp;
