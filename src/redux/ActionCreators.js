import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL'


export const updateStaff = (staff) => dispatch => {
    return fetch(baseURL + 'staffs',{
        method: 'PATCH',  
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(staff),
        credentials: 'same-origin'
        
    })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
}

export const addStaff = (staff) => ({
    type: ActionTypes.ADD_NEWSTAFF,
    payload: staff
})

export const deleteStaff = (staffId) => dispatch => {
    return fetch(baseURL + 'staffs/' + staffId, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))

}

export const afterDeleteStaff = (staffs) => ({
    type: ActionTypes.DELETE_STAFF,
    payload: staffs
})

export const postStaff = (staff) => dispatch => {
    return fetch(baseURL + 'staffs', {
        method: "POST",
        body: JSON.stringify(staff),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'

    })
        .then(response => response.json())
        .then(staff => dispatch(addStaff(staff)))

}

export const fetchStaffs = () => dispatch => {
    return fetch(baseURL + 'staffs')
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
}

export const addStaffs = (staffs) => ({
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
})

export const fetchDepartments = () => dispatch => {
    return fetch(baseURL + 'departments')
        .then(response => response.json())
        .then(departments => dispatch(addDepartments(departments)))
}

export const addDepartments = (departments) => ({
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
})

export const fetchStaffsSalary = () => dispatch => {
    return fetch(baseURL + 'staffsSalary')
        .then(response => response.json())
        .then(staffsSalary => dispatch(addStaffsSalary(staffsSalary)))
}

export const addStaffsSalary = (staffsSalary) => ({
    type: ActionTypes.ADD_STAFFS_SALARY,
    payload: staffsSalary
})