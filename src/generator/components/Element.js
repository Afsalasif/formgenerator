import React from 'react';
import Email from './Email';
import Text from './Text';
import Select from './Select';

function Element({field:{field_type,field_id,field_label,field_mandatory,field_placeholder,field_options,field_value}}) {
    
    
    
    
  switch (field_type) {
        case 'email':
            return <Email 
            field_id={field_id} 
            field_label={field_label} 
            field_mandatory={field_mandatory}  
            field_placeholder={field_placeholder}
            field_value={field_value}
            />;
        case 'text':
            return <Text 
            field_id={field_id} 
            field_label={field_label} 
            field_mandatory={field_mandatory}  
            field_placeholder={field_placeholder}
            field_value={field_value}
            />;
        case 'select':
            return <Select
            field_id={field_id} 
            field_label={field_label} 
            field_options={field_options}
            field_value={field_value}
            />;
        default:
            return null;
  }

 
}

export default Element