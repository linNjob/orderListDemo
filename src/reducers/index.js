import { CHANGE_TEXT } from '../constants/actionType';


const initialState = {
    inputValue: '1'
}

const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_TEXT:
            return {
                ...state,
                ...payload,
                // input: {
                //     inputValue: action.payload.input,
                // },

                // input: payload.input,

                // ...payload.input
                
                // inputValue: payload.input,
            }
        default:
            return state;
    }
}

export default todoReducer;