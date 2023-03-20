//Home Page
import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { Card,Box,Button, CardContent, CardMedia,Stack, Grid} from '@mui/material';
import { TextField } from "@mui/material";
import Typography from '@mui/material/Typography';
import './MovieApi.css'
import {Rating} from "@mui/material";
import Films from "../Films/Films";

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

console.log("PLAYINGS",playings)
return (
<div className="movies">
    <TextField fullWidth size="large" id="standard-basic" label="Search" variant="standard" ></TextField>
    <Button>Submit</Button>

{playings.map(playing => {
    <Films playing = {playing} />
   // console.log('poster',playing.poster_path)

    return (

<div key={playing?.id} className ="content" > 
 <Films playing = {playing} />
<Card variant="outlined" sx={{display: "flex", height: 400,m: 1, flexWrap: "wrap", }} >
   <CardMedia component="img" sx={{width: 250, flexDirection : "column", flexWrap: "wrap"  }}
image = {'https://image.tmdb.org/t/p/original'+ playing?.poster_path} />   
    <Box sx={{display: "flex", flexDirection: "row" , flexWrap: "wrap" }}>
    <CardContent sx={{flex: "1 0 auto"}}>
    <Typography component="div" variant="h5">
            {playing.title.substring(0,40)}
            {playing.description}
        </Typography>
        <Typography color="text.secondary" component= "div">
    <Typography format = "YYYY">{playing?.release_date}</Typography>
</Typography>
    <Rating 
  name="popularity"
  value={playing?.voter_count}
  onChange={(event, newValue) => {
    setValue(newValue)
    alert('Rated');
  }}
/>
    <Stack spacing={2} direction="row" sx={{mt:6}}>
    <Button variant="contained" color="secondary" className="btn-block" onClick={Films}>
  Add to Watchlist
</Button>
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