import style from "./index.module.css";
import Link from "next/link";
import Image from "next/image";


import { useState } from "react";

// interface NavBarProps {
//   handelSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handleClick: () => void;
//   search?: string;
// }
//const API_KEY = process.env.NEXT_PUBLIC_KEY;

const NavBar = () => {
    const [showSearch, setShowSearch] = useState(false);


  return (
    <>
    <nav className={style.container}>
      <div className={style.top}>
        <h1 className={style.header}>Cat Breeds</h1>
        <Image
        className={style.icon}
          src="/magnifier_icon.png"
          alt="search icon"
          width="40"
          height="40"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        />
      </div>
    
      {showSearch && (
        <div  className={showSearch? style.search :style.hideSearch}>
          <input
            className={style.input}
            type="search"
            // onChange={handelSearch}
            // value={search}
            required
          />
          <Link href="/search">
            <button className={style.button}>
              Search
            </button>
          </Link>
          <div
            className={style.close}
            onClick={() => {
              setShowSearch(false);
            }}
          >
            X
          </div>
        </div>
      )}
    </nav>
    
    </>
  );
};

export default NavBar;