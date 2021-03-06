import { REGISTERING,REGISTER_SUCCESS, REGISTER_FAILURE,LOGGING_IN,LOGIN_SUCCESS,LOGIN_FAILURE, LOGGEDOUT } from '../actions/userAcctActions';
const initialState = {
  registering: false,
  error:null,
  loggingIn: false,
  loginInfo: false,
  registration: null,
  isLoggedIn: null
}

export default (state = initialState, action)=>{
  switch(action.type){
    case REGISTERING:
      return{ registering:true }
    case REGISTER_SUCCESS:
      return{ registering:false, registration: action.payload}
    case REGISTER_FAILURE:
      return{ registering: false, error: "Could not register user"}
    case LOGGING_IN:
      return{ loggingIn:true }
    case LOGIN_SUCCESS:
      return{ loggingIn: false, loginInfo: action.payload}
    case LOGIN_FAILURE:
      return{ loggingIn: true, error: "Error logging in."}
    case LOGGEDOUT:
      return {loginInfo: false}
    default: return state;
  }
}
