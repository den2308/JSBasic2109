import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { PageHeader } from 'antd';
import { useDispatch, useStore } from 'react-redux'
import { getWEatherDataThunk } from './store/thunk/thnks';
import { decrementAction } from './store/action/action';

import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

const App = () => {
  const dispatch = useDispatch()
  const store = useStore()
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
    console.log('store', store.getState())
  }
  const handleDecrement = () => {
    //varian 1
    //dispatch({ type: 'DECREMENT' })
    //varian 2
    dispatch(decrementAction())
  }
  const handleGetWeatherData = () => {
    dispatch(getWEatherDataThunk())
  }
  return (
    <div >
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Our awesome app"
        extra={[
          <Link key="home" to="/">Home</Link>,
          <Link key="nexcomponent" to="/next-component">Second component</Link>,
          <button onClick={handleIncrement}>Increment</button>,
          <button onClick={handleDecrement}>Decrement</button>,
          <button onClick={handleGetWeatherData}>Get weather data</button>
        ]}
      />
      <Routes>
        <Route path='/' element={<SecondComponent />} />
        <Route path='/next-component' element={<ThirdComponent />} />
        {/*<Route path='/user/:userID' element={<ThirdComponent />} />*/}
      </Routes>
    </div>
  )
}

export default App
