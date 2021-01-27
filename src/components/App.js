import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'

import './App.css'
import Contacts from './Contacts'
import Chat from './Chat'

function App() {
  const [chat, setChat] = useState({})

  return (
    <Router>
      <div className='app__container'>
        <h1>WhosApp</h1>
        <div className='app__container-inner'>
          <Route
            path='/' exact
            component={Contacts}
          />
          <Route
            path='/chat'
            component={() => <Chat chat={chat} setChat={setChat} />}
          />
        </div>
      </div>
    </Router>
  )
}

export default App
