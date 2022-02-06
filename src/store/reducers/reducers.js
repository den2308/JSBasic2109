/* eslint-disable import/no-anonymous-default-export */
import constants from '../constants/constants';

const initialState = () => ({
    count: 0,
    weather: {}
})

export default (state = initialState(), action) => {
    switch (action.type) {
        case constants.INCREMENT:
            console.log(action)
            return { ...state, count: state.count + 1 }
        case constants.DECREMENT:
            console.log(action)
            return { ...state, count: state.count - 1 }
        case constants.GET_WEATHER_DATA:
            return {
                ...state,
                weather: action.data
            }
        default: return state
    }
}
