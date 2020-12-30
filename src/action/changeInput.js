import { CHANGE_TEXT } from '../constants/actionType';

export const changeInput = (input) => {
    return {
        type: CHANGE_TEXT,
        payload: {
            inputValue: input,
        }
    }
}