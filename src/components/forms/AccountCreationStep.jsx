import React from 'react';
import { Modal, Form, FloatingLabel } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    Email: Yup.string().email('Invalid email').required('A valid email is required'),
    Password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long.')
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Password must contain at least one uppercase letter, one number, and one special character'
        
        ),
})

const AccountCreationStep = ({ onPrev, initialValues, onChange}) => {
    
  return (
    <Modal.Body>
            <Formik
                validationSchema={validationSchema}
                onPrev={onPrev}
                initialValues={initialValues}
            >
                    <Form noValidate>
                    <FloatingLabel controlId='Email' label='Email' className='mb-3'>
                        <Form.Control type='email' name='Email' value={initialValues.Email} onChange={onChange} placeholder='example@example.com' className='form-control' />
                    </FloatingLabel>
                    
                    <FloatingLabel controlId='Password' label='Password' className='mb-3'>
                        <Form.Control type='password' name='Password' value={initialValues.Password} onChange={onChange} placeholder='Password2!' className='form-control' />
                    </FloatingLabel> 
                </Form>
            </Formik>
    </Modal.Body>
  )
}

export default AccountCreationStep
