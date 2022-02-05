/* eslint-disable import/no-anonymous-default-export */
import constants from '../constants/constants';

const initialState = () => ({
    count: 0
})

export default (state = initialState(), action) => {
    switch (action.type) {
        case constants.INCREMENT:
            console.log(action)
            return { count: state.count + 1 }
        case constants.DECREMENT:
            console.log(action)
            return { count: state.count - 1 }
        default: return state
    }
}
