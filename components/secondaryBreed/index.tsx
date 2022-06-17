import style from "./index.module.css"
import Image from "next/image"
import {useState} from "react"

interface SecondaryBreedProps{
    image:string;
    breedName:string;
    description:string;
    url:string
  }

const SecondaryBread = ({image, breedName, description, url}:SecondaryBreedProps) => {

const [show, setShow] = useState(false)
const handelShow = () => setShow(!show)

  return (
    <div>
        <Image
         alt="random breed picture" 
         width={50}
         height={50}
         src={image}
         onClick={handelShow}
        />
        <h2>{breedName}</h2>
        <div>                    {/* it will expand after click*/}
        <h1>{breedName}</h1>
        <p>{description}</p>
         <p>{url}</p>
        </div>
    </div>
  )
}

export default SecondaryBread