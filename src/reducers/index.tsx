
const initialState = {
  theme: 'dark',
};


export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const {content} = action.payload;

      return {
        ...state,
        theme: content
      }


    default:
      return state;
  }
}
