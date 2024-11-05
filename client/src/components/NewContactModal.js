import React, { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'

export default function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  const { createContact } = useContacts()

  function handleSubmit(e) {
    e.preventDefault()
    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton style={{ borderBottom: '2px solid #007bff' }}>
        <Modal.Title style={{ fontWeight: 'bold', color: '#007bff' }}>Create Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} style={{ padding: '10px' }}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required style={{ borderRadius: '10px' }} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required style={{ borderRadius: '10px' }} />
          </Form.Group>
          <Button type="submit" style={{ backgroundColor: '#007bff', border: 'none', borderRadius: '20px', padding: '10px 20px', marginTop: '10px' }}>Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}
