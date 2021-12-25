import React, { useState } from 'react'

const SecondComponent = ({ userName }) => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Functional component</h1>
            <p>
                {userName}
            </p>
            <span>Click count {count}</span>
            <br />
            <button onClick={handleClick}>Click me please</button>
        </div >
    )
}
export default SecondComponent
