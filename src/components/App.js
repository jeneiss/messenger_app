import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import './App.css'
import Contacts from './Contacts'
import Chat from './Chat'

function App() {
  return (
    <Router>
      <div className='app__container'>
        <div className='app__container-inner'>
          <Route
            path='/' exact
            component={Contacts}
          />
          <Route
            path='/chat'
            component={Chat}
          />
        </div>
      </div>
    </Router>
  )
}

export default App
