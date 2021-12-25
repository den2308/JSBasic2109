import React, { Component } from 'react'
import SecondComponent from './SecondComponent'

class App extends Component {
  //the first varian of create state in class
  // constructor() {
  //   super()
  //   this.state = {
  //     name: 'John',
  //     lastName: 'Weak'
  //   }
  // }
  //the second variant to create state in class
  state = {
    userName: 'Test user name',
    count: 0
  }
  handleChangeUserName = (e) => {
    //please don't do that!!!!
    //this.state.userName = 'some value'

    //correct way to change state of react component
    this.setState({ userName: e.target.value })
  }
  increaseCountValue = () => {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }
  handleClickIncreaseCount = () => {
    this.increaseCountValue()
    this.increaseCountValue()
    this.increaseCountValue()
  }
  render() {
    return (
      <div>
        <h1>Hello React class component</h1>
        <input label='Enter user name'
          defaultValue={this.state.userName}
          onChange={this.handleChangeUserName} />
        <br />
        <button onClick={this.handleClickIncreaseCount}>
          Increase count
        </button>
        <SecondComponent userName={this.state.userName} />
      </div >
    )
  }
}

export default App
