export const formLoginReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
        errors: action.errors,
      };
    case "CLEAR_FORM":
      return {
        ...state,
        user: "",
        password: "",
        errors: {
          user: "*You need at least 8 characters",
          password: "*You need at least 8 characters and one number",
        },
      };
    default:
      return state;
  }
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        password: action.password,
      };
      case 'LOG_OUT':
        return {
          ...state,
          isLoggedIn:false,
          user:'',
          password:'',
        }
    default:
      return state;
  }
};
