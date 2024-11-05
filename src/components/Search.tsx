import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AnimeCard from './AnimeCard'

const Search = () => {
    // const [data, setData] = useState([]);
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("Naruto"); 

    useEffect(() => {


        const fetchAnime = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
                setAnime(response.data.data); 
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchAnime();
    }, [query]);

    // const getStarWarsPerson = async () => {
    //     const res = await axios.get("https://swapi.dev/api/people/1")
    // }

  return (
    <>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" value={() => setQuery("poop")} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        { data.map(item => {
            if(item === null){
                <AnimeCard {item}/>
            }
        }) } 
    </>
    // if (animecard?) {
    //     <AnimeCard></>
    // }
  )
}

export default Search