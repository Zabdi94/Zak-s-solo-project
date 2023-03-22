// const watchedReducer = (state = [], action) => {
//   //console.log("ins staw", state);
//   switch (action.type) {
//     case "SET_WATCHED":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };
const watchedReducer = (state = [], action) => {
  if (action.type === "SET_WATCHED") {
    console.log(`The element was ${action.payload}`);
    state.push(action.payload);
    return state;
  }

  return state;
};

export default watchedReducer;
