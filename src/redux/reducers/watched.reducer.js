const watchedReducer = (state = [], action) => {
  //console.log("ins staw", state);
  switch (action.type) {
    case "SET_WATCHED":
      return action.payload;
    default:
      return state;
  }
};

export default watchedReducer;
