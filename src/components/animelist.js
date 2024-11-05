const AnimeList = () => {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("Naruto"); 

    // const getStarWarsPerson = async () => {
    //     const res = await axios.get("https://swapi.dev/api/people/1")
    // }

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Anime List</h1>
            <ul>
                {anime.map((item) => (
                    <li key={item.mal_id}>
                        <h2>{item.title}</h2>
                        <img src={item.images.jpg.image_url} alt={item.title} />
                        <p>{item.synopsis}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimeList;