import { postAction } from './actionTypes';

export const initState = {
  posts: true,
  Comments: false,
  err: '',
}

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case postAction.addPost:
      return {
        ...state,
        showSignIn: true,
        err: '',
      }
    case postAction.editComment:
      return {
        ...state,
        err: `${payload}`,
      }
    case postAction.addComment:
      return {
        ...state,
        showSignIn: false,
        err: ''
      }
    default:
      return state;
  }
};