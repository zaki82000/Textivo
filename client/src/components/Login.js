import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import { FaUser, FaPlus } from 'react-icons/fa' // استيراد الأيقونات

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <Container 
      className="d-flex align-items-center justify-content-center flex-column" 
      style={{ height: '100vh', backgroundColor: '#f0f2f5' }}
    >
      {/* عنوان الموقع */}
      <h1 style={{
        fontFamily: "'Roboto', sans-serif", 
        fontWeight: '700', 
        fontSize: '2.5rem', 
        color: '#0b5ed7', 
        marginBottom: '1rem'
      }}>
        Textivo
      </h1>
      
      <Form 
        onSubmit={handleSubmit} 
        className="p-4 shadow-sm rounded" 
        style={{ maxWidth: '400px', width: '100%', backgroundColor: '#fff' }}
      >
        <Form.Group className="mb-3">
          <Form.Label>
            <FaUser className="mr-2" /> Enter Your ID
          </Form.Label>
          <Form.Control 
            type="text" 
            ref={idRef} 
            required 
            className="rounded-pill" 
            placeholder="e.g., 12345-abcde" 
          />
        </Form.Group>   
        <Button 
          type="submit" 
          className="w-100 mb-2 rounded-pill" 
          style={{ backgroundColor: '#0b5ed7', border: 'none' }}
        >
          Login
        </Button>
        <Button 
          onClick={createNewId} 
          variant="secondary" 
          className="w-100 rounded-pill" 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <FaPlus className="mr-2" /> Create A New ID
        </Button>
      </Form>
    </Container>
  )
}
