import React, { useState } from 'react'

const Form01 = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleInputFirstName = (value) => {
        setFirstName(value)
    }

    return (


        <form >{/*onSubmit={(event) => event.preventDefault()}  Second case for controlling event prevent default*/}
            <input type='text' value={firstName} placeholder='First Name' onChange={(event) => handleInputFirstName(event.target.value)}//First case for handling onChange
            />
            <input type='text' value={lastName} placeholder='Last Name' onChange={(event) => setLastName(event.target.value)}//Second case of handling onChange
            />

            <button onClick={(event) => event.preventDefault()} >  Submit   </button > {/*I way for prevent default on button */}


        </form>


    )
}

export default Form01