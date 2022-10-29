import React from 'react'
// import movieImg from '../../images/rrr.jpg'
import './SamplePost.css'
import { useState,useEffect } from 'react';
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
// import Youtube  from 'react-youtube'

function SamplePost(props) {

    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]= useState("")

       useEffect(() => {
           axios.get(props.url).then((response)=>{
            console.log(response.data);
            setMovies(response.data.results)
            
           })
         }, [])

        //  const opts = {
        //     height: '390',
        //     width: '100%',
        //     playerVars: {
        //         // https://developers.google.com/youtube/player_parameters
        //         autoplay: 1,
        //     },
        // };

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
    <div className='samplePost'>

        {
            movies.map((obj,index)=>{
                return( 
                    <div  index={index} className={props.isSmall ? " smaller_post" : "poster-img"}>
                    <img src={`${imageUrl+obj.backdrop_path}`} alt="poster1" onClick={()=>{handleMovie(obj.id)}} />
                
                    <div className="info">
                        <div className="likeSec">
                        <i onClick={()=>{
                        alert("Thank You: Your feedback helps us show you more of what you love")
                    }} class="fa fa-thumbs-up" aria-hidden="true"></i>

                    <i  onClick={()=>{
                        alert("We wont suggest this again")
                    }} class="fa fa-thumbs-down" aria-hidden="true"></i>
                        </div>

                        
                  
                    </div>
                   </div>
                    )
                })
                
               
            }

    
    </div>
  )
}

export default SamplePost