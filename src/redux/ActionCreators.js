import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL'

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_NEWSTAFF,
    payload: staff
})

export const fetchStaffs = () => dispatch => {
    return fetch(baseURL + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
}

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

export const fetchDepartments = ()=> dispatch =>{
    return fetch(baseURL+ 'departments')
        .then(response=>response.json())
        .then(departments =>dispatch(addDepartments(departments)))
}

export const addDepartments = (departments) =>({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})