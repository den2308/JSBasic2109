import React, { useState, useReducer, useEffect, useCallback, useMemo, useRef, useContext } from 'react'
import MyFirstContext from './myFirstContext'

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            console.error('Oops something went wrong')
            break;
    }
}

const SecondComponent = () => {
    const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)
    const [username, setUsername] = useState({ name: 'John', lastName: 'Weak' })
    const inputElement = useRef(null)
    const contextObject = useContext(MyFirstContext)
    const handleChangeUserName = () => {
        setUsername((s) => ({ ...s, name: 'Not John' }))
    }
    // useEffect(() => {
    //     console.log('did mount')
    //     return () => {
    //         console.log('will unmount, destroy component')
    //     }
    // }, [count])
    const handleIncreaseCount = useCallback(
        () => {
            setCount(count + 1)
        },
        [count, setCount],
    )
    // const handleIncreaseCount2 = useMemo(() => {
    //    //some Math counts for memoization
    // }, [])
    const handleClickFocusButton = () => {
        inputElement.current.focus()
    }
    return (
        <div>
            <h2>Second component</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncreaseCount}>Increase Count</button>
            <br />
            <span>{username.name}</span>
            <span>{username.lastName}</span>
            <button onClick={handleChangeUserName}>Change username</button>
            <br />
            <input ref={inputElement} type="text" />
            <br />
            <button onClick={handleClickFocusButton}>Change focus to input</button>
            <br />
            <h2>User reducer</h2>
            <br />
            <p>Count: {state.count}</p>
            <button onClick={() => {
                dispatch({ type: 'increment' })
            }}>Increase count+</button>
            <button onClick={() => {
                dispatch({ type: 'decrement' })
            }}>Decrease count-</button>
        </div >
    )
}
export default SecondComponent
