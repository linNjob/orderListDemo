import { CHANGE_TEXT } from '../constants/actionType';

export const changeInput = (inputValue) => {
    return {
        type: CHANGE_TEXT,
        payload: {
            inputValue,
        }
    }
}