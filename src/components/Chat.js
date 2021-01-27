import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

function Chat() {
  const [chat, setChat] = useState({})
  const [value, setValue] = useState('')

  // eslint-disable-next-line no-restricted-globals
  const contact = queryString.parse(location.search).contact

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
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
          [contact]: value
        }
      ))
    }

    setValue('')
    e.preventDefault()
  }

  return (
    <div className='chat__container'>
      <Link
        to='/'
      >
        Back
      </Link>
      <h2>{contact}</h2>
      <div className='chat__window'>
        {chat[contact]}
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Chat
