import style from "./index.module.css";
import Image from "next/image";

interface MainBreedProps {
  image: string;
  breedName: string;
  description: string;
  url: string;
  origin: string;
  temperament: string;
  lifeSpan: string;
}

const MainBreed = ({
  image,
  breedName,
  description,
  url,
  origin,
  temperament,
  lifeSpan,
}: MainBreedProps) => {

  console.log('url mainbreed :>> ', url);
  return (
    <div>
      <div className={style.main}>
        <div className={style.image}>
          <Image alt="breed of the day" width={500} height={500} src={image} />
        </div>
        <section className={style.section}>
          <h2>{breedName}</h2>
          <p>Origin: {origin}.</p>
          <p>Temperament: {temperament}.</p>
          <p>Life Span: {lifeSpan} years.</p>
          <p>{description}</p>
          <h4>
            <a className={style.link} href={url} target="_blank" rel="noopener noreferrer">
              More Information.
            </a>
          </h4>
        </section>
      </div>
      <div>
        <hr  className={style.line} />
      </div>
    </div>
  );
};

export default MainBreed;
