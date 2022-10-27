import React from 'react';
import './Rowpost.css';
import { useState,useEffect } from 'react';
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube  from 'react-youtube'





function Rowpost(props) {

    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]= useState("")

       useEffect(() => {
           axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
            
           })
         }, [])

         const opts = {
            height: '390',
            width: '100%',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        const handleMovie = (id)=>{
           console.log("ID:",id);
           axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
             if(response.data.results.length!==0 ){
                setUrlId(response.data.results[0])
             }else{
                console.log("Trailer not available");
             }
           })
        }

    return (
        <div className="Row" id={props.id}>

            <div className="rowTitle">
            <h2>{props.title}</h2>
            </div>
            
            <div className="posters">
                {
                    movies.map((obj,index)=>{
                        return(                           
                            <img onClick={()=>{handleMovie(obj.id)}} index={index} className={props.isSmall ? " smaller_post" : "poster-img"}  src={`${imageUrl+obj.backdrop_path}`} alt="poster1"   />
                                                 
                        )
                    })
                    
                   
                }
              
            </div>   
            {
              urlId && <Youtube videoId={urlId.key} opts={opts} /> 
            }
            
            
        </div>
    )
}

export default Rowpost



