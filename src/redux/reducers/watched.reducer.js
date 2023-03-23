const watchedReducer = (state = [], action) => {
  //console.log("ins staw", state);
  switch (action.type) {
    case "SET_WATCHED":
      return [...state, action.payload];
    case "CLEAR_MOVIE":
      return [];
    default:
      return state;
  }
};

export default watchedReducer;
