import * as ActionTypes from './ActionTypes';
import { STAFFS } from '../shared/staffs'

export const Staffs = (state = {
    staffs: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NEWSTAFF:
            return {...state, staffs: action.payload}
            // return state.concat(action.payload);
        case ActionTypes.ADD_STAFFS:
            return { ...state,staffs: action.payload }
        case ActionTypes.DELETE_STAFF:
            return { ...state,staffs: action.payload }
        default:
            return state;
    }
}