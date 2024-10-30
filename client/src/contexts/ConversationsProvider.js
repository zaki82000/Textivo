import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ConversationsContext = React.createContext()

export function useConversations(){
  return useContext(ConversationsContext)
}

export function ConversationsProvider({ children }) {
  const [Conversations, setConversations] = useLocalStorage('Conversations', [])

  function createConversation(id, name) {
    setConversations(prevConversations => { 
      return [...prevConversations, {id ,name}]
    })
  }
  return (
    <ConversationsContext.Provider value={{ Conversations, createConversation }}>
      {children}
    </ConversationsContext.Provider>
  )
}