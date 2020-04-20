import { GET_ALL_USERLIST } from "../types";
const initialState = {
    userList: {}
}
const moveListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERLIST:
            console.log("KKKKKKKKKKKKK",action)
            return {
                ...state,
                userList: action.payload,
            };
        default:
            return state
    }
}
export default moveListReducer;