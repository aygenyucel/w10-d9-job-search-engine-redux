const initialState = {
  favouriteCompanies: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  // case "ADD_TO_CART":
  //   //what are we going to do in every case?
  //   //we are going to return the new state of the app
  //   return {
  //     ...state,
  //     favouriteCompanies: {
  //       ...state.favouriteCompanies,
  //       content: [...state.favouriteCompanies.content, action.payload],
  //       //this is a non-mutating way of adding an element
  //       //to an array. remember: NEVER mutate state in a reducer function,
  //       //that brokes the immutability patter of redux
  //       //check doesitmutate.xyz if you want to see which methods
  //       //are safe to use in a reducer function!
  //     },
  //   };

  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favouriteCompanies: {
          ...state.favouriteCompanies,
          content: [...state.favouriteCompanies.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favouriteCompanies: {
          ...state.favouriteCompanies,
          content: state.favouriteCompanies.content.filter((companyName, i) => {
            return companyName !== action.payload;
          }),
        },
      };
    default:
      return state;
    //worst case scenario, return the current state without modifying anything!
  }
};

export default mainReducer;
