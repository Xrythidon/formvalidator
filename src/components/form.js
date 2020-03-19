import React from 'react'
import FormControl from "./form-control";

const Form = () => {
    return (
        <div>
           <FormControl tag="Username" />
           <FormControl tag="Password" />
           <FormControl tag="Email" />
        </div>
    )
}

export default Form
