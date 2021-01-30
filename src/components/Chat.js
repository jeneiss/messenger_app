import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

function Chat({ chat, setChat, draft, setDraft }) {
  // eslint-disable-next-line no-restricted-globals
  const contact = queryString.parse(location.search).contact
  const [value, setValue] = useState(draft[contact])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (value.trim() !== '') {
      if (chat[contact]) {
        setChat(prevState => (
          {
            ...prevState,
            [contact]: prevState[contact].concat(value)
          }
        ))
      } else {
        setChat(prevState => (
          {
            ...prevState,
            [contact]: [value]
          }
        ))
      }
    }

    setValue('')
    setDraft('')
    e.preventDefault()
  }

  useEffect(() => {
    return () => {
      setDraft(prevState => ({...prevState, [contact]: value}))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div className='chat__container'>
      <Link
        className='back-btn'
        to='/'
      >
        Back
      </Link>
      <h2>{contact}</h2>
      <div className='chat__window'>
        {chat[contact] && chat[contact].map((chat, index) => {
          return (
            <div
              className='chat__bubble-container'
              key={index}
            >
              <div
                className='chat__bubble'
              >
                {chat}
              </div>
            </div>
          )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className='text-input'
          type='text'
          value={value}
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Submit'
          className='submit-btn'
        />
      </form>
    </div>
  )
}

export default Chat
