import React, { useRef } from 'react'
import { Container, Form, Button } from "react-bootstrap"
import { v4 as uuidV } from "uuid"

export default function Login({onIdSubmit}) {
  const idRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }
  function createNewId () {
    onIdSubmit(uuidV())
  }

  return (
    <Container className="d-flex align-items-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group>
          <Form.Label>Enter Your Email</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type='submit' style={{margin: '10px 10px'}}>Login</Button>
        <Button onClick={createNewId} variant='secondary'>Create a new account</Button>
      </Form>
    </Container>
  )
}