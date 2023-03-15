import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { Card,Box,Button, CardContent, CardMedia,Stack} from '@mui/material';
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import './MovieApi.css'
import MovieList from "../MovieList/MovieList";
import Moment from "moment";
import {Rating} from "@mui/material";


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


return (
<div className="movies">
    <TextField fullWidth size="medium" id="standard-basic" label="Search" variant="standard" ></TextField>
    <Button size='medium' type='submit' color='primary' variant='outlined'>Submit</Button>

{playings.map(playing => {
    <MovieList playing = {playing} />
   // console.log('poster',playing.poster_path)
    return (
<div key={playing?.id} className ="content" > 

<Card variant="outlined" sx={{display: "flex", height: 400,m: 1, }} >
   <CardMedia component="img" sx={{width: 150, flexDirection : "column", column: 5 }}
image = {'https://image.tmdb.org/t/p/original'+ playing?.poster_path} />   
    <Box sx={{display: "flex", flexDirection: "row"}}>
    <CardContent sx={{flex: "1 0 auto"}}>
    <Typography component="div" variant="h5">
            {playing.title.substring(0,40)}
        </Typography>
        <Typography color="text.secondary" component= "div">
    <Typography format = "YYYY">{playing?.release_date}</Typography>
</Typography>
    <p>popularity:{playing?.popularity}</p> 
    <Rating
  name="popularity"
  value={playing?.popularity}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
    <Stack spacing={2} direction="row" sx={{mt:6}}>
    <Button variant = "contained" > Add to WatchList</Button>
</Stack>
   </CardContent>
   </Box>
</Card>

</div>
)}
)}

</div>
)
}
export default MovieApi

{/* <h3>{playing?.title}</h3>  */}