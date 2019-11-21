import { FETCH_USER} from "../actions/types";

export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case FETCH_USER: {
            console.log('action: ', action)
            return { ...action.payload}
        }
        default: return {}
    }
}
