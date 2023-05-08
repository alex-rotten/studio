import "./SearchBar.css";
import Image from "next/image";
import Link from "next/link";

export const SearchBar = ({ placeholder }) => {
    return (
        <div className="search">
            <div className="searchBar">
                    <Image
                        className="search__image"
                        src="/search.svg"
                        alt="search"
                        width={22}
                        height={22}
                    />
                <input className="searchInput" type="text" placeholder={placeholder}/>
            </div>
            <div className="searchResult"/>
        </div>
    );
};
