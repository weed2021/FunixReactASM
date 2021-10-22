import * as ActionTypes from './ActionTypes';

export const StaffsSalary = (state = {
    isLoading: true,
    errMess: null,
    staffsSalary: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFFS_SALARY:
            return { ...state, isLoading: false, errMess: null, staffsSalary: action.payload }
        case ActionTypes.SALARY_LOADING:
            return { ...state, isLoading: true, errMess: null, staffsSalary: [] }
        case ActionTypes.SALARY_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, staffsSalary: [] }
        default:
            return state;
    }
}