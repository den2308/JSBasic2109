import { getWeatherDataAPI } from '../../api';

import { getWeatherData } from '../action/action';

export const getWEatherDataThunk = () => async (dispatch) => {
    try {
        const res = await getWeatherDataAPI()
        dispatch(getWeatherData(res))
    } catch (error) {
        console.log('error', error)
    }
}


