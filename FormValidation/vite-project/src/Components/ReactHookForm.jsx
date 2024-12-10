import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'; //npm install semantic-ui-react semantic-ui-css
import './Style.css'

function ReactHookForm() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);

    };


    return (


        <div className='wrapper'>
            <Form onSubmit={handleSubmit(onSubmit)}   >

                <div className='row'>
                    <Form.Field  >
                        <label className='label--view'>First Name</label>
                        <input className='input--view'
                            placeholder='First Name'
                            type='text'
                            {...register('firstName', { required: true, maxLength: 10 })}
                        />


                    </Form.Field>
                </div>
                {errors.firstName && <p className='text-error'>Please check the First Name</p>}


                <div className='row'>
                    <Form.Field>
                        <label className='label--view' >Last Name</label>
                        <input className='input--view'
                            placeholder='Last Name'
                            type='text'
                            {...register('lastName', { required: true, maxLength: 10 })}
                        />
                    </Form.Field>
                </div>
                {errors.lastName && <p className='text-error'>Please check the Last Name</p>}



                <div className='row'>
                    <Form.Field>
                        <label className='label--view'>ValidMail </label>
                        <input className='input--view'
                            placeholder='Email'
                            type='email'
                            {...register('email', {
                                required: true,
                                pattern:
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                        />
                    </Form.Field>

                </div>
                {errors.email && <p className='text-error'>Please check the Email</p>}


                <div className='row'>
                    <Form.Field>
                        <label className='label--view'>Password </label>
                        <input className='input--view'
                            placeholder='Password'
                            type='password'
                            {...register('password', {
                                required: true,
                                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                            })}
                        />
                    </Form.Field>
                </div>

                {errors.password && <p className='text-error'>Please check the Password</p>}

                <div>
                    <Button className="validate--input" type='submit'>Submit</Button>
                </div>
            </Form >


        </div>

    );

}

export default ReactHookForm
