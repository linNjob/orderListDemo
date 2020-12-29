import { CHANGE_TEXT } from '../constants/actionType';

export const changeInput = (input: string) => {
    return {
        type: CHANGE_TEXT,
        payload: {
            input: input,
        }
    }
}