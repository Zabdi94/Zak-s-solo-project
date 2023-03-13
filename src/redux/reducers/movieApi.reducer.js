const movieNow = (state = {},action) => {
    if(action.type === 'MOVIE_API') {
        return action.payload;
    }
    return state;
}

export default movieNow;