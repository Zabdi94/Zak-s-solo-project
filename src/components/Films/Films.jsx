
import  Typography  from "@mui/material/styles/createTypography";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
import { Card, Button, CardContent, CardMedia, Stack } from '@mui/material';

function Films( playing ) {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleDelete = () => {
        dispatch ({
            type: "DELETE_MOVIE",
            payload: Films
        });
        console.log("Fetching", Films.id);
    }
    
    const Watched = (event) => {
        const original_title = event.target.getAttribute("name");
        const poster_path = event.target.getAttribute("image");

        dispatch({
            type: "UPDATE_MOVIES",
            payload:  Films.id
        });
        console.log('this is the update shows reducer', Films);
    }
    console.log("FILMS",playing)

    return (
        <Card variant="outlined" sx={{ display: "flex", height: 400, m: 1, flexWrap: "wrap" }}>
            {Films && Films.poster_path && Films.title && (
                <CardMedia
                    component="img"
                    alt={Films.title}
                    height="250"
                    image={Films.poster_path}
                />
            )}
            <CardContent>
                {Films && Films.title && (
                    <Typography gutterBottom variant="h7">
                        Title: {Films.title}
                    </Typography>
                )}
                <Stack spacing={2} direction="row" sx={{mt:6}}>
    <Button variant="contained" color="secondary" className="btn-block" onClick={handleDelete}>
  DELETE
</Button>
</Stack>
            </CardContent>
        </Card>
    );
}

export default Films;












// import { useDispatch } from "react-redux"
// import { useState } from "react"
// import { useHistory, useParams } from "react-router-dom"
// import swal from "sweetalert2";
// import { Card,Box,Button, CardContent, CardMedia,Stack, Grid} from '@mui/material';
// import {Typography} from "@mui/material";

// function Films ({Films}) {
    
//     const dispatch = useDispatch();
//     const history = useHistory();
    
//     const handleDelete = () => {
//         dispatch ({
//             type: "DELETE_MOVIE",
//             payload: Films
//         });
//         console.log("Fetching", Films.id)
//     }
    
    
    
    
//     const Watched = (event) => {
//         // swal({
//         //     title: "Added",
//         //     text: "Great",
//         //     icon: "success"
//         // })
//         const original_title = event.target.getAttribute("name");
//         const poster_path = event.target.getAttribute("image")

//         dispatch({
//             type: "UPDATE_MOVIES",
//             payload: {
//                 ...Films
//             }
//         })  
//         console.log('this is the update shows reducer', Films)
//     }
    
    
    
//     return(
//         <>
//        <div>
//         <Card variant="outlined" sx={{display: "flex", height: 400,m: 1, flexWrap: "wrap", }} >
//              <CardMedia
//             component="img"
//             alt = "Image here"  
//             height = "250"
//             image = {Films.poster_path}/>
 

//         <CardContent>
//              <Typography gutterBottom variant = "h7" >
//             Title : {Films.title}
//              </Typography>


//         </CardContent>
//              <Stack>
//                 <Button variant="contained" color="secondary" className="btn-block" onClick={Watched}>
//         Add to Watchlist</Button>
//              </Stack>
//         </Card>
//         </div>
//         </>
//         )
//     }
//     export default Films