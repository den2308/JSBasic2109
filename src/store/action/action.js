import constants from '../constants/constants';

export const incrementAction = (increment) => ({
    type: constants.INCREMENT,
    increment
})

export const decrementAction = (decrement) => ({
    type: constants.DECREMENT,
    decrement
})