import React, { Component } from 'react'
import SecondComponent from './SecondComponent'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello React class component</h1>
        <SecondComponent />
      </div>
    )
  }
}

export default App
