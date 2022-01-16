import React from 'react'
import ThirdComponent from './ThirdComponent'

const SecondComponent = ({ renderSecondComponent }) => {
    if (!renderSecondComponent) {
        return null
    }
    return (
        <div>
            {renderSecondComponent ?
                <h1>Render second component</h1> :
                null
            }
            <ThirdComponent />
        </div >
    )
}
export default SecondComponent
