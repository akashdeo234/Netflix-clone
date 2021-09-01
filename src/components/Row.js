import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import '../styles/Row.css'
import axios from '../components/axios';
const base_url = 'https://image.tmdb.org/t/p/original';
const API_KEY = "c4b905133f97a8f2345a6ce4b226354a";
function Row({title , fetchUrl ,isLarge}) {
    const [movies,setMovies] = useState([]);
    const [urlId,setUrlId] = useState("");
    console.log(urlId);
    //yt function
    const opts = {
        height: '420',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }}

        //onClick function for yt
        //https://www.youtube.com/watch?v=I28IF1-Vd-Y
        //https://api.themoviedb.org/3/movie/{id}/videos?api_key={API_KEY}&language=en-US
        const handleClick = (id) =>{
           console.log(id);
           axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
                console.log(response.data)
                if(response.data.results.length!==0){
                    setUrlId(response.data.results[0])
                }else{
                    console.log('Array is Empty')
                }
            })
        }
        console.log(urlId);
    useEffect(()=>{
        async function fetchData (){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
           // console.log(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    return (
        <div className='row'>
            <h2 className="row-title">{title}</h2>
                <div className={`row-posters ${isLarge && "large-row-posters"}`}>
                    {movies.map((movie) => (
                         <img src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className='row-img' onClick={()=>handleClick(movie.id)} />
                         
                    ))}
                </div>
               {urlId && <YouTube videoId={urlId.key} opts={opts}/>} 
        </div>
        
    )
}


export default Row
