import React, {useState} from "react";
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from "react-datepicker";

const _DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)
    return (
    <ReactDatePicker 
        className='form-control' 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        dateFormat="dd/MM/yyyy"
        
    />
  );
}

export default _DatePicker;