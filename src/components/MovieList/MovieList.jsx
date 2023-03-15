import { Box,Card,CardContent,CardMedia,Typography,Stack,Button} from "@mui/material";
import Moment from 'react'
function MovieList (playing) {

return(
<Card sx={{display: "flex", height: 170, m: 1}}>
<CardMedia component="img" sx={{width: 150}}
image = {'https://image.tmdb.org/t/p/original'+ playing?.poster_path} />
<Box sx={{display: "flex", flexDirection: "column"}}>
    <CardContent sx={{flex: "1 0 auto"}}>
        <Typography component="div" variant="h5">
            {playing.title.substring(0,25)}
        </Typography>
<Typography color="text.secondary" component= "div">
    <Moment format = "YYYY">{playing.release_date}</Moment>
</Typography>
<Stack spacing={2} direction="row" sx={{mt:6}}>
    <Button variant = "contained"> Add to WatchList</Button>
</Stack>
</CardContent>
</Box>
</Card>
)

}
export default MovieList