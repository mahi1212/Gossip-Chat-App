import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="3c9a291d-c163-4be1-aefe-95468df2df40"
      userName="mahi"
      userSecret="123456"
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App