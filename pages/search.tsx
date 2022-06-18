import Footer from "../components/footer"
import NavBar from "../components/navbar"
import Image from "next/image";

interface SearchProps {
  photosFound: any[];
  handelSearch: (e:React.ChangeEvent<HTMLInputElement>) => void,
  handleClick:()=> void,
}




const Search = ({photosFound, handleClick,handelSearch }:SearchProps) => {

  if (photosFound.length === 0) {
    return (<>
     <NavBar
        handelSearch={handelSearch}
        handleClick={handleClick}
        />
      <h1> SEARCH RESULTS</h1>
    <p>Nothing found</p>;
    </>
  )} 


  return (
    <div>
        <NavBar
        handelSearch={handelSearch}
        handleClick={handleClick}
        />
         <h1> SEARCH RESULTS</h1>
        {
          photosFound.map(photo => {return <Image key={photo.id} alt="a cat!" src={photo.url} width={200} height={200}/>})
        }
        <Footer/>
    </div>
  )
}

export default Search