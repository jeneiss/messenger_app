import React from 'react'
import { Link } from 'react-router-dom'

function Contacts() {
  const contacts = ['Jo', 'Michael', 'Ellie']

  const contactsList = contacts.map((contact, index) => {
    return (
        <Link
          key={index}
          className='contacts__item'
          to={`/chat?contact=${contact}`}
        >
          <div className='contacts__item-inner'>
            {contact}
          </div>
        </Link>
    )
  })

  return (
    <div className='contacts__container'>
      {contactsList}
    </div>
  )
}

export default Contacts
