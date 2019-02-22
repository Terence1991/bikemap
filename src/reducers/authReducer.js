const actionTypes = {
  signIn: 'SIGN_IN',
  signOut: 'SIGH_OUT'
}

export const signIn = (userId) => {
  return {
    type: actionTypes.signIn,
    payLoad: userId
  }
}

export const signOut = () => {
  return {
    type: actionTypes.signOut
  }
}

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INITIAL_STATE , action) => {
  switch(action.type) {
    case  actionTypes.signIn:
      return {...state, isSignedIn: true, userId: action.payload};
    case actionTypes.signOut:
      return {...state, isSignedIn: false, userId: null};
    default:
    return state;
  }
}