import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Contacto.css';

const Mail = () => {

  return (

    <div className='contacto'>
      <div className='formcontact'>
        <h1><strong>Contacto form</strong></h1>
        <p>¿Do you want to know more about my career in the world of web programming?</p>
        <p>¡I will contact you! ✉️ </p>
      </div>
      <Form className='formBasicEmail' action="https://formspree.io/f/meqbqdro"
        method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <label htmlFor="email">Email Address</label>
          <Form.Control id="email" type="email" name="email" placeholder="example@mail.com" required />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <label className='message'>
          <textarea className='message' name="message" placeholder='Your message'></textarea>
        </label>
        <br />
        <Button variant="dark" type="submit" id='enviado'>
          <strong>Submit 💾</strong>
        </Button>
      </Form>
    </div>

  )
}

export default Mail

