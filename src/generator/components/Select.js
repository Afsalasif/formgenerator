
import React,{useContext} from 'react';
import { FormContext } from '../FormContext';


function Select({field_id,field_label,field_placeholder,field_options}) {
   const {handleChange} =useContext(FormContext)
  return (
    <div>
     <label>{field_label}  :  </label>  
    <select onChange={event => handleChange(field_id,event)}  >
    <option value="">--Please choose an option--</option>
        {field_options.length>0 &&field_options.map((option,i)=>(
            <option key={i} value={option.op_label} >{option.op_label}</option>
        ))}
    </select>
    </div>
  )
}

export default Select