import { useSelector,useDispatch } from "react-redux"
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"


function MovieApi () {
const dispatch = useDispatch ()
const CurrentMovie = useSelector(store => store.movieNow)

const [movie, setMovie] = useState('')

useEffect(() => {
    getMovie()
  },[]);

//   const onClickMovie = () => {
//     getMovie();
//   }


const getMovie = () => {
   axios.get('/api/movie')
   .then((response)=> {
    console.log('in response',response.data.results)
    dispatch({
        type: "MOVIE_API",
        payload: response.data.results
    });
   }) .catch (error => {
    console.log('error in get',error)
   })
  
}

return (
    <>
    <main>
        <h1>Movies!</h1>
        <section className="movies">
            
        </section>
    </main>
    </>
)
}
export default MovieApi