import React, { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from "react-datepicker";
export { _birthDay, StartDate, _startDate,CustomInput }



var _birthDay = '';
const BirthDayPicker = () => {
  const [birthDay, setBirthDay] = useState(new Date());
  _birthDay = birthDay;
  return (
    <ReactDatePicker
      className='form-control'
      selected={birthDay}
      placeholder='dd/mm/yyyy'
      onChange={(date) => setBirthDay(date)}
      dateFormat="dd/MM/yyyy"
    />
  );
}

// const CustomInput = (props) => (
//   <div className="custom-input">
//     <input type="text" {...props} />
//   </div>
// );
const CustomInput = (props) => {
  const [birthDay, setBirthDay] = useState(new Date());
  _birthDay = birthDay;
  return(
    <ReactDatePicker
      className='form-control'
      selected={birthDay}
      placeholder='dd/mm/yyyy'
      onChange={(date) => setBirthDay(date)}
      dateFormat="dd/MM/yyyy"
      {...props}
    />

  )
    
};

var _startDate='' ;
const StartDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    _startDate = startDate;
    return (
    <ReactDatePicker 
      className='form-control' 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
      dateFormat="dd/MM/yyyy"   
    />
  );
}


export default BirthDayPicker;