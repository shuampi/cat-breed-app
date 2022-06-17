import style from "./index.module.css"
import Image from "next/image"

interface MainBreedProps{
  image:string;
  breedName:string;
  description:string;
  url:string
}

const MainBreed = ({image, breedName, description, url}:MainBreedProps) => {
  return (
    <div>
<Image alt="breed of the day" 
 width={500}
 height={500}
 src={image}
/>
<section>
  <h2>{breedName}</h2>
  <p>{description}</p>
  <p>{url}</p>
</section>
<hr/>
    </div>
  )
}

export default MainBreed