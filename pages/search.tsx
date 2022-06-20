import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Image from "next/image";
import style from "../styles/search.module.css";

interface SearchProps {
  photosFound: any[];
  handelSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
}

const Search = ({ photosFound, handleClick, handelSearch }: SearchProps) => {
  console.log("url :>> ", photosFound[0].breeds[0].cfa_url);

  if (photosFound.length === 0) {
    return (
      <>
        <NavBar handelSearch={handelSearch} handleClick={handleClick} />
        <h1 className={style.header}> Search Results:</h1>
        <p>Nothing found</p>;
      </>
    );
  } else if(photosFound[0].breeds.length===0){
    return (
      <>
        <NavBar handelSearch={handelSearch} handleClick={handleClick} />
        <h1 className={style.header}> Search Results:</h1>
        <p>Nothing found</p>;
      </>
    )
  }

  return (
    <div>
      <NavBar handelSearch={handelSearch} handleClick={handleClick} />
      <h1 className={style.header}> Search Results:</h1>
      <section className={style.section}>
        <h2>{photosFound[0].breeds[0].name}</h2>
        <p>Origin: {photosFound[0].breeds[0].origin}.</p>
        <p>Temperament: {photosFound[0].breeds[0].temperament}.</p>
        <p>Life Span: {photosFound[0].breeds[0].lifeSpan} years.</p>
        <p>{photosFound[0].breeds[0].description}</p>
        <h4>
          <a
            href={photosFound[0].breeds[0].cfa_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            More Information.
          </a>
        </h4>
      </section>
      <div className={style.picturesContainer}>
      {photosFound.map((photo) => {
        return (
          <div key={photo.id} className={style.image}>
            <Image alt="a cat!" src={photo.url} width={200} height={200} />{" "}
          </div>
        );
      })}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
