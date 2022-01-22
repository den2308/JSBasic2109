import React, { useState, useEffect } from 'react'
//import ThirdComponent from './ThirdComponent'

const SecondComponent = () => {
    const [count, setCount] = useState(0)
    const [username, setUsername] = useState({ name: 'John', lastName: 'Weak' })
    const handleChangeUserName = () => {
        //setUsername({ name: 'Not John' })
        setUsername((s) => ({ ...s, name: 'Not John' }))
    }
    useEffect(() => {
        console.log('did mount')
        return () => {
            console.log('will unmount, destroy component')
        }
    }, [count])
    return (
        <div>
            <h2>Second component</h2>
            <h3>Count: {count}</h3>
            <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
            <br />
            <span>{username.name}</span>
            <span>{username.lastName}</span>
            <button onClick={handleChangeUserName}>Change username</button>
        </div >
    )
}
export default SecondComponent
