import { CHANGE_USER_IMAGE } from "../actions/user.action"

const initialState = {
    id: 'user@name.com',
    image: ''
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_IMAGE:
            return {
                ...state,
                image: action.payload,
            }
        default:
            return state
    }
}

export default UserReducer