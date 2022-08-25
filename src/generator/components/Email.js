import React,{useContext} from 'react';
import { FormContext } from '../FormContext';

function Email({field_id,field_label,field_mandatory,field_placeholder,field_value}) {
    const {handleChange}=useContext(FormContext)
   
    return (
    
    <div>
       <label>{field_label} : </label>
       <input onChange={event => handleChange(field_id,event)} style={{text:"black"}} placeholder={field_placeholder} value={field_value} required={field_mandatory} type="text" />
    </div>
  )
}

export default Email