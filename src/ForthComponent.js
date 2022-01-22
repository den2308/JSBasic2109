import React from 'react'
import MyFirstContext from './myFirstContext'

const ForthComponent = () => {
    return (
        <div>
            <h4>Forth Component</h4>
            <MyFirstContext.Consumer>
                {user => (
                    <p>
                        {user.userName}
                    </p>
                )}
            </MyFirstContext.Consumer>
        </div>
    )
}

export default ForthComponent 