import { BrowserRouter as Router, Route } from 'react-router-dom'
import React, { useState } from 'react'

import './App.css'
import Contacts from './Contacts'
import Chat from './Chat'
import { DraftMessageProvider, DraftMessageConsumer } from './DraftMessageContext'

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
          <DraftMessageProvider>
            <Route
              path='/chat'
              component={() => (
                <DraftMessageConsumer>
                  {context => (
                    <Chat
                      chat={chat}
                      setChat={setChat}
                      draft={context.draft}
                      setDraft={context.setDraft}
                    />
                  )}
                </DraftMessageConsumer>
              )}
            />
          </DraftMessageProvider>
        </div>
      </div>
    </Router>
  )
}

export default App
