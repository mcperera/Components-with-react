import produce from "immer";
import { USER_LOGIN, USER_LOGOUT } from "../actionTypes/user";

const initialState = {
  user: null,
};

//----with immer
export default produce((draft, action) => {
  switch (action.type) {
    case USER_LOGIN:
      draft.user = action.payload.user;
      break;
    case USER_LOGOUT:
      draft.user = null;
      break;
    default:
      return draft;
  }
}, initialState);

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case USER_LOGIN:
//       return { ...state, user: action.payload.user };
//     //draft.user = action.payload.user;
//     case USER_LOGOUT:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// }
