import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { Card,Box,Button} from '@mui/material';
import { TextField } from "@mui/material";
import './MovieApi.css'

function MovieApi () {
const dispatch = useDispatch ()
const playings = useSelector(store => store.movieNow)

const [movies, setMovies] = useState([])

useEffect(() => {
    getMovie()
  },[]);

//   const onClickMovie = () => {
//     getMovie();
//   }



const getMovie = () => {
    dispatch({
        type: "GET_API",
        payload: movies,
    });
    console.log('THIS IS MOVIE',movies)
   }


return <div className="movies">
    <TextField placeholder=" Search"></TextField>
    <Button>Search</Button>
{playings.map(playing => {

   // console.log('poster',playing.poster_path)
    return (
<div key={playing?.id} className ="content" > 
<Box>
<Card variant="outlined">
   <p>title:{playing?.title}/</p> 
   <p>popularity:{playing?.popularity}</p> 
   <p>release_date:{playing?.release_date}</p>
   <p className="description"> description: {playing?.overview} </p> 
   <img src = {'https://image.tmdb.org/t/p/original'+ playing?.poster_path} alt= "Movies" height="200" width="150"/>
</Card>
</Box>
</div>
)})}

</div>
  
}
export default MovieApi