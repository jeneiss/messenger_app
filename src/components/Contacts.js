import React from 'react'

function Contacts() {
  const contacts = ['Jo', 'Michael', 'Ellie']

  const contactsList = contacts.map((contact, index) => {
    return (
      <div
        className='contacts__item'
        key={index}
      >
        {contact}
      </div>
    )
  })

  return (
    <div className='contacts__container'>
      {contactsList}
    </div>
  )
}

export default Contacts
