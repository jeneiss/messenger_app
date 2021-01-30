import React, { useState } from 'react'
const { Provider, Consumer } = React.createContext()

function DraftMessageProvider({ children }) {
  const [draft, setDraft] = useState({})

  return (
    <Provider value={{draft:draft, setDraft: setDraft}}>
      {children}
    </Provider>
  )
}

export { DraftMessageProvider, Consumer as DraftMessageConsumer }
