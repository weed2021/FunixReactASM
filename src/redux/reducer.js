
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

export const initialState = JSON.parse(localStorage.getItem('Staffs')) || {
    staffs: STAFFS,
    departments: DEPARTMENTS
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWSTAFF':
            // Biến newStaff lưu giá trị từ action dismatch truyền về
            const newStaff = action.newStaff;

            // Biến newStaffs lưu mảng nhân viên mới
            const newStaffs= [...state.staffs,newStaff]

            // Gán staffs state cũ bằng bằng state staff đã update
            state.staffs = newStaffs;

            // Lưu state mới vào localStorage
            localStorage.setItem('Staffs',JSON.stringify({...state}));

            return {...state}

        default:
            break;
    }
    return state
}

