import React from 'react';
import './Banner.css';
import {useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
        console.log(response.data.results[0]);
        setMovie(response.data.results[0])
        // const movie_num = Math.floor(Math.random() * response.data.results.length);
        //     setMovie(response.data.results[movie_num]);
    })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl +movie.backdrop_path : ""})`}}
        className="Banner-Section">

            <div className="Content-Section">
                <div className="title_sec">
                    <h1 className="movie-title">{movie ? movie.name : ""}</h1>
                </div>              
                <div className="button_section">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <div className="movie_desc">
                    <h1 className='banner_desc'>{movie ? movie.overview : ""}</h1>
                </div>              
            </div>

            <div className="fade_bottom"></div>
            
        </div>
    )
}

export default Banner