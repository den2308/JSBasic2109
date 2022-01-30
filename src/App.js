import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { PageHeader } from 'antd';

import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

const App = () => {

  return (
    <div >
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Our awesome app"
        extra={[
          <Link key="home" to="/">Home</Link>,
          <Link key="nexcomponent" to="/next-component">Second component</Link>,
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
