const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI( dir );
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key':'23397fd268msh4d4c218818e8ec3p16c689jsn876f9f3f5832'}
    });
    const resp = await instance.get();

    if ( resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

