
import { STAFFS, DEPARTMENTS } from '../shared/staffs';

export const initialState = JSON.parse(localStorage.getItem('Staffs')) || {
    staffs: STAFFS,
    departments: DEPARTMENTS
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEWSTAFF':
            // alert('ok')
            const values = action.values;

            // Depend on department input tranform to department date
            let _dpm = '';
            switch (values.department) {
                case 'sale':
                    _dpm = state.departments[0]
                    break;
                case 'hr':
                    _dpm = state.departments[1]
                    break;
                case 'marketing':
                    _dpm = state.departments[2]
                    break;
                case 'it':
                    _dpm = state.departments[3]
                    break;
                case 'finance':
                    _dpm = state.departments[4]
                    break;

                default:
                    break;
            }

            
            // alert(state.staffs.length)
            const newStaff = {
                id: state.staffs.length,
                name: values.name,
                doB: new Date(values.doB).toISOString(),
                salaryScale: values.salaryScale,
                startDate: new Date(values.startDate).toISOString(),
                department: _dpm,
                annualLeave: values.annualLeave,
                overTime: values.overTime,
                image: '/assets/images/alberto.png'

            };

            const newStaffs= [...state.staffs,newStaff]
            console.log(newStaffs)
            state.staffs = newStaffs;
            localStorage.setItem('Staffs',{...state});
            return {...state}
            
            

        default:
            break;
    }
    return state
}

