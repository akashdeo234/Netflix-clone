import React, { useEffect, useState } from 'react'
import '../styles/Banner.css'
import axios from '../components/axios';
function Banner({fetchUrl}) {
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
        async function fetchData (){
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results[
                Math.floor(Math.random ()* request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData()
    },[fetchUrl]);
    console.log(movie);
    return (
        //${base_url}${banner.backdrop_path
        //https://image.tmdb.org/t/p/original/img
        <div className='banner' style={{
            backgroundSize: 'cover',
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundRepeat: "no-repeat",
            boxShadow: "0 0 5px 2px #282a2d",
            boxShadow: "inset 10px 10px 50px black",
             backgroundPosition: "center",
        }}>

            <div className="banner-content" >
                <h1 className='title'>{movie?.title || movie?.name || movie?.trending_name}</h1>
                <button className='btn'>Play</button>
                <button className='btn'>My List</button>
                <p style={{maxWidth: '400px'}}>{movie?.overview}</p>
            </div>
           
        </div>
    )
    }
export default Banner
