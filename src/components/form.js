import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../assets/css/form.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Age: '',
    Gender: '',
    MaritalStatus: '',
    DateOfBirth: '',
    TimeOfBirth: '',
    PlaceOfBirth: '',
    ResidentialAddress: '',
    WhatsappNumber: '',
    Occupation: '',
    Hobbies: '',
    PurposeOfVisit: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage('');
      }, 3000); // Hide alert after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    const isNumber = (value) => /^\d+$/.test(value);
    const requiredFields = [
      'Name', 'Age', 'Gender', 'MaritalStatus', 'DateOfBirth',
      'TimeOfBirth', 'PlaceOfBirth', 'ResidentialAddress',
       'WhatsappNumber', 'Occupation', 'Hobbies',
      'PurposeOfVisit'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        errors[field] = `${field.split(/(?=[A-Z])/).join(' ')} is required`;
        isValid = false;
      }
    });

    if (formData.WhatsappNumber && !isNumber(formData.WhatsappNumber)) {
      errors.WhatsappNumber = "WhatsApp Number should contain only numbers";
      isValid = false;
    }

    if (formData.WhatsappNumber && formData.WhatsappNumber.length !== 10) {
      errors.WhatsappNumber = "WhatsApp Number should be exactly 10 digits";
      isValid = false;
    }

    if (formData.Age && (!isNumber(formData.Age) || formData.Age < 1 || formData.Age > 120)) {
      errors.Age = "Age should be a number between 1 and 120";
      isValid = false;
    }

    if (formData.Name && !/^[A-Za-z\s]+$/.test(formData.Name)) {
      errors.Name = "Name should contain only letters and spaces";
      isValid = false;
    }

    if (formData.Occupation && !/^[A-Za-z\s]+$/.test(formData.Occupation)) {
      errors.Occupation = "Occupation should contain only letters and spaces";
      isValid = false;
    }

    if (formData.Hobbies && !/^[A-Za-z\s]+$/.test(formData.Hobbies)) {
      errors.Hobbies = "Hobbies should contain only letters and spaces";
      isValid = false;
    }

    if (formData.PurposeOfVisit && !/^[A-Za-z\s]+$/.test(formData.PurposeOfVisit)) {
      errors.PurposeOfVisit = "Purpose of Visit should contain only letters and spaces";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    
    setIsLoading(true);

    fetch("https://script.google.com/macros/s/AKfycby7WUns782cuTzyGCzsr6P6vW4jHxLuL7-eekszrMO6AD1rIliefBGPcsgA8zKhLnmx/exec", {
      method: "POST",
      body: formDatab
    })
      .then((res) => res.text()) // Use res.text() instead of res.json() for text response
      .then((data) => {
        console.log("Response from Google Apps Script:", data); // Debugging line
        if (data.includes("successfully sent")) { // Check if the response contains the success message
          setIsLoading(false);
          setAlertMessage("Successfully submitted"); // Show alert
          setFormData({
            Name: '',
            Age: '',
            Gender: '',
            MaritalStatus: '',
            DateOfBirth: '',
            TimeOfBirth: '',
            PlaceOfBirth: '',
            ResidentialAddress: '',
            WhatsappNumber: '',
            Occupation: '',
            Hobbies: '',
            PurposeOfVisit: '',
          });
        } else {
          console.error("Submission failed");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsLoading(false);
      });
  };
  

  return (
    <div className='cont-frm p-5'>
      <Container fluid className='wholeform pt-5 p-3 w-100 lg-shadow'>
        <h1 className="text-center">SRI KRISHNA JYOTHISHALAYAM</h1>
        <h2 className="text-center">(A True Vedic Solution)</h2>
        <h3 className="text-center">Specialization in Vedic Astrology & Vaastu</h3>
        {alertMessage && <div className="alert alert-success">{alertMessage}</div>}
        <Form onSubmit={handleSubmit} className="mt-4">
          <Form.Group controlId="formName" className='mb-3'>
            <Form.Label className='mb-0'>Name of the Person:</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
            {formErrors.Name && <Form.Text className="text-danger">{formErrors.Name}</Form.Text>}
          </Form.Group>

          <Row>
            <Col md={4} xs={12}>
              <Form.Group controlId="formAge"  className='mb-3'>
                <Form.Label className='mb-0'>Age:</Form.Label>
                <Form.Control
                  type="text"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                />
                {formErrors.Age && <Form.Text className="text-danger">{formErrors.Age}</Form.Text>}
              </Form.Group>
            </Col>
            <Col md={4} xs={12}>
              <Form.Group controlId="formGender" className='mb-3'>
                <Form.Label className='mb-0'>Gender:</Form.Label>
                <Form.Control
                  as="select"
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
                {formErrors.Gender && <Form.Text className="text-danger">{formErrors.Gender}</Form.Text>}
              </Form.Group>
            </Col>
            <Col md={4} xs={12}>
              <Form.Group controlId="formMaritalStatus" className='mb-3'>
                <Form.Label className='mb-0'>Marital Status:</Form.Label>
                <Form.Control
                  as="select"
                  name="MaritalStatus"
                  value={formData.MaritalStatus}
                  onChange={handleChange}
                >
                  <option value="">Select Marital Status</option>
                  <option value="Married">Married</option>
                  <option value="Single">Single</option>
                  </Form.Control>
                {formErrors.MaritalStatus && <Form.Text className="text-danger">{formErrors.MaritalStatus}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} xs={12}>
              <Form.Group controlId="formDateOfBirth" className='mb-3'>
                <Form.Label className='mb-0'>Date of Birth:</Form.Label>
                <Form.Control
                  type="date"
                  name="DateOfBirth"
                  value={formData.DateOfBirth}
                  onChange={handleChange}
                />
                {formErrors.DateOfBirth && <Form.Text className="text-danger">{formErrors.DateOfBirth}</Form.Text>}
              </Form.Group>
            </Col>
            <Col md={6} xs={12}>
              <Form.Group controlId="formTimeOfBirth" className='mb-3'>
                <Form.Label className='mb-0'>Time of Birth:</Form.Label>
                <Form.Control
                  type="time"
                  name="TimeOfBirth"
                  value={formData.TimeOfBirth}
                  onChange={handleChange}
                />
                {formErrors.TimeOfBirth && <Form.Text className="text-danger">{formErrors.TimeOfBirth}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formPlaceOfBirth" className='mb-3'>
            <Form.Label className='mb-0'>Place of Birth:</Form.Label>
            <Form.Control
              type="text"
              name="PlaceOfBirth"
              value={formData.PlaceOfBirth}
              onChange={handleChange}
            />
            {formErrors.PlaceOfBirth && <Form.Text className="text-danger">{formErrors.PlaceOfBirth}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formResidentialAddress" className='mb-3'>
            <Form.Label className='mb-0'>Residential Address:</Form.Label>
            <Form.Control
              as="textarea"
              name="ResidentialAddress"
              value={formData.ResidentialAddress}
              onChange={handleChange}
            />
            {formErrors.ResidentialAddress && <Form.Text className="text-danger">{formErrors.ResidentialAddress}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formWhatsappNumber" className='mb-3'>
            <Form.Label className='mb-0'>WhatsApp Number:</Form.Label>
            <Form.Control
              type="text"
              name="WhatsappNumber"
              value={formData.WhatsappNumber}
              onChange={handleChange}
            />
            {formErrors.WhatsappNumber && <Form.Text className="text-danger">{formErrors.WhatsappNumber}</Form.Text>}
          </Form.Group>

          <Row>
            <Col md={6} xs={12}>
              <Form.Group controlId="formOccupation" className='mb-3'>
                <Form.Label className='mb-0'>Occupation:</Form.Label>
                <Form.Control
                  type="text"
                  name="Occupation"
                  value={formData.Occupation}
                  onChange={handleChange}
                />
                {formErrors.Occupation && <Form.Text className="text-danger">{formErrors.Occupation}</Form.Text>}
              </Form.Group>
            </Col>
            <Col md={6} xs={12}>
              <Form.Group controlId="formHobbies" className='mb-3'>
                <Form.Label className='mb-0'>Hobbies:</Form.Label>
                <Form.Control
                  type="text"
                  name="Hobbies"
                  value={formData.Hobbies}
                  onChange={handleChange}
                />
                {formErrors.Hobbies && <Form.Text className="text-danger">{formErrors.Hobbies}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formPurposeOfVisit" className='mb-3'>
            <Form.Label className='mb-0'>Purpose of Visit:</Form.Label>
            <Form.Control
              as="textarea"
              name="PurposeOfVisit"
              value={formData.PurposeOfVisit}
              onChange={handleChange}
            />
            {formErrors.PurposeOfVisit && <Form.Text className="text-danger">{formErrors.PurposeOfVisit}</Form.Text>}
          </Form.Group>

          
          <div className='text-center'>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;
