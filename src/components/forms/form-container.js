import React from 'react'
import FormComponent from './form-component'

const FormContainer = (props) => {
  return (
    <div><FormComponent {...props}/></div>
  )
}

export default  FormContainer