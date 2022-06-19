import style from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

interface SecondaryBreedProps {
  image: string;
  breedName: string;
  description: string;
  url: string;
  breedOrigin:string
}

const SecondaryBread = ({
  image,
  breedName,
  description,
  url,
  breedOrigin
}: SecondaryBreedProps) => {
  const [show, setShow] = useState(false);
  const handelShow = () => setShow(!show);
  
if(image===undefined){
  image = "https://cdn2.thecatapi.com/images/hBXicehMA.jpg"
}



  return (
    <div className={style.container}>
      <div className={style.image}>
      <Image
        alt="random breed picture"
        width={200}
        height={200}
        src={image}
        onClick={handelShow}
      /></div>
      {show && (
        <div >
          <h2 className={style.title}>{breedName}</h2>
          <p>{description}</p>
          <h4 className={style.link}><a href={url} target="_blank" rel="noopener noreferrer">More information</a></h4>
        </div>
      )}

      {!show &&
      (<div >
         <h2 className={style.title}>{breedName}</h2>
      <p className={style.title}>{breedOrigin}</p>
      </div>
      )}
    </div>
  );
};

export default SecondaryBread;
