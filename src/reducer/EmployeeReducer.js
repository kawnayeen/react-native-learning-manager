/**
 * Created by kawnayeen on 4/21/17.
 */
import {
    EMPLOYEE_FETCH_SUCCESS
} from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            console.log(action);
            return state;
        default:
            return state;
    }
};
