import { CHANGE_TEXT } from '../constants/actionType';

// interface state {
//     input: {
//         title: any;
//     }
// }
const initialState = {
    input: {
        title: '',
    }
}
const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_TEXT:
            return {
                ...state,
                ...payload,
            }
        default:
            return state;
    }
}

export default todoReducer;