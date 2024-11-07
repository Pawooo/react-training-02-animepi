import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AnimeCard from './AnimeCard'

const Search = () => {
    // const [data, setData] = useState([]);
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [query, setQuery] = useState(""); 

    const fetchAnime = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
            setAnime(response.data.data); 
            setLoading(false);
            console.log(anime);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     const fetchAnime = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`);
    //             setAnime(response.data); 
    //             console.log(anime);
    //             setLoading(false);
    //         } catch (err) {
    //             setError(err);
    //             setLoading(false);
    //         }
    //     };
    //     fetchAnime();
    // }, [query]);

    // const getStarWarsPerson = async () => {
    //     const res = await axios.get("https://swapi.dev/api/people/1")
    // }

  return (
    <>
        <section className='flex justify-center'>
            <label className="input input-bordered flex items-center gap-2">
              {/* <input type="text" className="grow" placeholder="Search" value={() => setQuery(query)} /> */}
              <input type="text" className="grow" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
              { loading ? <span className="loading loading-dots loading-xs"></span> : null }
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
            <button className="btn btn-primary" onClick={fetchAnime}>Search</button>
        </section>
        {/* {data.map(item => (
          <Card key={item.id} data={item}></Card>
        ))} */}
        {/* { anime.map(item => (
            if(item === null){
                <AnimeCard key={item.id} {...item}/>
            } else {
                <p>No Results</p>
            }
        )
        }) }  */}
        <section className='mt-5'>
            <header><h1 className='text-4xl font-bold'>Results</h1></header>
            <main className='grid grid-cols-3 gap-5'>
                { anime.length > 0 ? (
                        anime.map(item => (
                            <AnimeCard key={item.mal_id} {...item}/>
                        ))
                    ) : (
                        <p className='mt-3'>No results found.</p>
                    )
                }
            </main>
        </section>
    </>
  )
}

export default Search