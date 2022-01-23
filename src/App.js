import React from 'react'
import SecondComponent from './SecondComponent'
import MyFirstContext from './myFirstContext'

const App = () => {
  return (
    <MyFirstContext.Provider value={{
      username: 'John Weak'
    }}>
      <SecondComponent />
    </MyFirstContext.Provider >
  )
}

export default App
