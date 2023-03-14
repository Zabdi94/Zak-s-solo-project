import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";

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
{movies.map(movie => (
  <playings

    key={movie?.id}
    title={movie?.title}
    popularity={movie?.popularity}
    release_date={movie?.release_date}
    image={movie?.poster_path}
  />
))}

</div>
  
}
export default MovieApi