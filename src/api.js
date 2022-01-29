import axios from 'axios'

const config = {
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=d5e0d92eb47081c243a43f17dbf15e5c',
    headers: {}
};

// axios(config)
//     .then((response) => {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//         console.log(error);
//     });

export const getWeatherData = async () => {
    try {
        const result = await axios(config)
        return result
    } catch (error) {
        console.log('fetch weather data error: ', error)
    }

}

