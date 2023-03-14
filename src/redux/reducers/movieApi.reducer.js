const movieNow = (state = {},action) => {
    console.log('THIS IS THE REDUCER PAYLOAD',action.payload);
    if(action.type === 'MOVIE_API') {
        return action.payload;
    }
    return state;
}

export default movieNow;