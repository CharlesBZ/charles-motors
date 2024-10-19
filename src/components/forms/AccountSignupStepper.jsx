import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import axios from "axios"
import RegistrationForm from "./RegistrationForm"
import AccountCreationStep from "./AccountCreationStep"

const AccountSignupStepper = ({ show, handleClose }) => {
  const [step, setStep] = useState(0)
  const [certUser, setCertUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Password: "",
    Address: "",
    AddressLine1: "",
    City: "",
    State: "",
    Zip: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log(certUser)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handlePrev = () => {
    setStep(step - 1)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setCertUser((userInput) => ({
      ...userInput,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users",
        { certUser: certUser },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log("API Response", res.data)
      setCertUser(certUser)

      // setIsSubmitting(true) ToDo add logic for react spinner while waiting for server api response
    } catch (error) {
      if (error.response) {
        console.error(error.response.data)
        console.error(error.response.status)
        console.error(error.response.headers)
      } else if (error.request) {
        console.error(error.request)
      } else {
        console.error("Error:", error.message)
      }
    }
    console.log("User input certUser Object", certUser)
  }

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {step === 0
            ? "Personal Information"
            : step === 1
            ? "Account Information"
            : "Information Conformation"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {step === 0 && (
          <RegistrationForm
            initialValues={certUser}
            onChange={handleOnChange}
            onNext={handleNext}
          />
        )}
        {step === 1 && (
          <AccountCreationStep
            initialValues={certUser}
            onChange={handleOnChange}
            onSubmit={handleSubmit}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        {step !== 0 && (
          <Button type="button" onClick={handlePrev}>
            Previous
          </Button>
        )}
        {step === 1 ? (
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default AccountSignupStepper
