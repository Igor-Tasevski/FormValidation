import React, { useState } from 'react'


//To make at least one validation on the form 
const Form02 = () => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    const validate = (value) => {
        return value.length > 2
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate(firstName) && validate(lastName)) {
            alert(`Form Submitted ${firstName}`)
        } else {
            alert('For not submitted')
        }
    }


    return (
        <div>
            <form>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text' placeholder='First name'
                />
                <br />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type='text' placeholder='Last name'
                />
                <br />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form >
        </div>



    )
}

export default Form02