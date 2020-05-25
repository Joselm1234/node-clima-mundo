const axios = require('axios');

const getClima = async(lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=64be4540344c953b8921c9f0c9d348ad&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}