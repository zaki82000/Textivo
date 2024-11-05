import React, { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';

export default function OpenConversation() {
  const [text, setText] = useState('')
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    )
    setText('')
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            const isFromMe = message.fromMe

            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${isFromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-3 py-2 ${isFromMe ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                  style={{
                    maxWidth: '70%',
                    borderRadius: '20px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                    alignSelf: isFromMe ? 'flex-end' : 'flex-start',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                  }}
                >
                  {message.text}
                </div>
                <div className={`text-muted small ${isFromMe ? 'text-right' : ''}`}>
                  {isFromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit} style={{ borderTop: '2px solid #f1f1f1', padding: '10px' }}>
        <Form.Group className="m-0">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Type your message..."
              style={{
                height: '60px',
                resize: 'none',
                borderRadius: '20px',
                padding: '10px',
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
              }}
            />
            <InputGroup.Append>
              <Button type="submit" style={{ borderRadius: '20px', marginLeft: '5px' }}>Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}
