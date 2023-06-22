import React from 'react'
import {useFormContext} from 'react-hook-form'

const Input = ({type, id, labeltext}) => {
    
    const { register ,
        formState: { errors }, } = useFormContext()

        const inputError = findInputError(errors, labeltext)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div><label>{labeltext}</label>
    {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
    <input type={type} id={id} 
    {...register(labeltext, {
        required: {
          value: true,
          message: 'This field is required!',
        },
      })} /></div>
  )
}


const InputError = ({ message }) => {
    return (
      <div><p>
       
        {message}
      </p></div>
    )
  }



export default Input