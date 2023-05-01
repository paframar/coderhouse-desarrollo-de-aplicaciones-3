import { SIGN_UP } from "../actions/auth.action"
import { SIGN_OUT } from "../actions/auth.action"
import { SIGN_IN } from "../actions/auth.action"

const initialState = {
    token: null,
    userId: null,
    userEmail: null,
    isLoading: false,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                userEmail: action.payload.userEmail,
                isLoading: false
            }
        case "SIGN_UP_START":
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                userEmail: action.payload.userEmail,
                isLoading: false
            }
        case "SIGN_UP_FAIL":
            return {
                ...state,
                isLoading: false
            }
        case "SIGN_OUT":
            case SIGN_OUT:
                return {
                  ...state,
                  token: null,
                  userId: null,
                  userEmail: null,
                };
        default:
            return state;
    }
}

export default AuthReducer