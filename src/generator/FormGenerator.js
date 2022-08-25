import React, { useState, useEffect } from 'react';
import formJSON from './FormElement.json';
import Element from './components/Element';
import { FormContext } from './FormContext';




function FormGenerator() {
    const [elements, setElements] = useState(null)
    useEffect(() => {
        setElements(formJSON[0])
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(elements)
    }
    const handleChange = (id, event) => {
        const newElements = { ...elements }
        newElements.fields.forEach(field => {
            const { field_type, field_value, field_id } = field
            if (id === field_id) {
                field['field_value'] = event.target.value
            }
            setElements(newElements)
        })


        console.log(elements)
    }
    const { fields, page_label } = elements ?? {}


    return (
        <FormContext.Provider value={{ handleChange }} >
            <div>
                <h3>{page_label}</h3>
                <form>

                    {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
                    <button type='submit' onClick={(e)=>handleSubmit} > submit</button>
                </form>

            </div>
        </FormContext.Provider>

    )
}

export default FormGenerator