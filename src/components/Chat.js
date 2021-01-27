import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

function Chat() {
  const [value, setValue] = useState('')

  // eslint-disable-next-line no-restricted-globals
  const contact = queryString.parse(location.search).contact

  const handleChange = (e) => {
    setValue(() => e.target.value)
  }

  return (
    <div className='chat__container'>
      <Link
        to='/'
      >
        Back
      </Link>
      <h2>{contact}</h2>
      <div className='chat__window'></div>
      <form>
        <input type='text' value={value} onChange={handleChange} />
        <input type='submit' value='Submit' />
      </form>
      <p>{value}</p>
    </div>
  )
}

export default Chat
