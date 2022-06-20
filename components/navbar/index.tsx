import style from "./index.module.css";
import Link from "next/link";
import Image from "next/image";


import { useState } from "react";

interface NavBarProps {
  handelSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  search?: string;
}
const API_KEY = process.env.NEXT_PUBLIC_KEY;

const NavBar = ({ handelSearch, handleClick, search }: NavBarProps) => {
    const [showSearch, setShowSearch] = useState(false);


  return (
    <>
    <nav className={style.container}>
      <div className={style.top}>
        <Link href="/">
        <h1 className={style.header}>Cat Breeds</h1>
        </Link>
        <div className={style.icon}>
        <Image
        
          src="/magnifier_icon.png"
          alt="search icon"
          width="40"
          height="40"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        />
        </div>
      </div>
    
      {showSearch && (
        <div  className={showSearch? style.search :style.hideSearch}>
          
          <input
            className={style.input}
            type="search"
            onChange={handelSearch}
            value={search}
            placeholder="images, e.g., Persian"
            required
          />
          <Link href="/search">
            <button className={style.button} onClick={() => handleClick()}>
              Search
            </button>
          </Link>
          <div
            className={style.close}
            onClick={() => {
              setShowSearch(false);
            }}
          >
            x
          </div>
        </div>
      )}
    </nav>
    
    </>
  );
};

export default NavBar;