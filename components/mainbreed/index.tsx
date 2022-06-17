import Image from "next/image"
interface MainBreedProps{
  image:string;
  breadName:string;
  description:string;
  url:string
}

const MainBreed = ({image, breadName, description, url}:MainBreedProps) => {
  return (
    <div>
<Image alt="breed of the day" 
 width={500}
 height={500}
 src={image}
/>
<section>
  <h2>{breadName}</h2>
  <p>{description}</p>
  <p>{url}</p>
</section>

    </div>
  )
}

export default MainBreed