import React from 'react'
import { Modal, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required('First name is required.'),
    LastName: Yup.string().required('Last name is required.'),
    Phone: Yup.string()
        .matches(
            /^[0-9]{10}$/,
            'Phone number must be a 10-digit number.'
        )
        .required('Phone number is required.'),
    Address: Yup.string().required('Address is required.'),
    AddressLine1: Yup.string(),
    City: Yup.string().required('City is required.'),
    State: Yup.string().required('State is required.'),
    Zip: Yup.string().required('5-digit zip code is required.')
})

const RegistrationForm = ({initialValues, onNext, onChange }) => {
    
  return (
    <Modal.Body>
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onNext}
        >
                <Form noValidate onSubmit={onNext}>
                    <Row>
                        <Col>
                            <FloatingLabel controlId='FirstName' label='First Name' className='mb-3'>
                                <Form.Control type='text' name='FirstName' value={initialValues.FirstName} onChange={onChange} placeholder='John' className='form-control' />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId='LastName' label='Last Name' className='mb-3'>
                                <Form.Control type='text' name='LastName' value={initialValues.LastName} onChange={onChange} placeholder='Smith' className='form-control' />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId='Phone' label='Phone #' className='mb-3'>
                                <Form.Control type='text' name='Phone' value={initialValues.Phone} onChange={onChange} placeholder='111-222-3333' className='form-control' />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel controlId='Address' label='Address' className='mb-3'>
                                <Form.Control type='text' name='Address' value={initialValues.Address} onChange={onChange} placeholder='123 Somewhere Dr'  className='form-control' />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId='AddressLine1' label='Address Line (Apt, Ste, etc...)' className='mb-3'>
                                <Form.Control type='text' name='AddressLine1' value={initialValues.AddressLine1} onChange={onChange} placeholder='Apt #, Ste #' className='form-control' />
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel controlId='City' label='City' className='mb-3'>
                                <Form.Control type='text' name='City' value={initialValues.City} onChange={onChange} placeholder='Small Town' className='form-control' />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId='State' label='State' className='mb-3'>
                                <Form.Control type='text' name='State' value={initialValues.State} onChange={onChange} placeholder='GA' className='form-control' />
                            </FloatingLabel>
                        </Col>

                        <Col>
                            <FloatingLabel controlId='Zip' label='Zip Code' className='mb-3'>
                                <Form.Control type='text' name='Zip' value={initialValues.Zip} onChange={onChange} placeholder='54123' className='form-control' />
                            </FloatingLabel>
                        </Col>
                    </Row>
                   
                </Form>
        </Formik>
    </Modal.Body>
  )
}

export default RegistrationForm
