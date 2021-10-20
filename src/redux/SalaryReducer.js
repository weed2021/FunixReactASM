import * as ActionTypes from './ActionTypes';

export const StaffsSalary = (state={
    staffsSalary: []
},action) =>{
    switch (action.type) {
        case ActionTypes.ADD_STAFFS_SALARY:
            return {...state,staffsSalary: action.payload}    
        default:
            return state;
    }
}