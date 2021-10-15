
import {STAFFS,DEPARTMENTS} from '../shared/staffs';

export const initialState = {
    staffs:STAFFS,
    departments:DEPARTMENTS
}

export const Reducer = (state = initialState,action) =>{
    switch (action.type) {
        case 'ADD_NEWSTAFF':
            console.log('success')
            break;
    
        default:
            break;
    }
    return state
}

