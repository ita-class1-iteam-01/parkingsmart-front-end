import axios from "axios";

const GaoDeUserKey = 'f4423551e65b3bdd60345faefeb5b13b'

const MapAxios = axios.create({
    baseURL: 'https://restapi.amap.com/v3',
});

export const inputPrompt = (city,keyword) => {
    return MapAxios.get(`/assistant/inputtips?output=json&city=${city}&keywords=${keyword}&key=${GaoDeUserKey}&datatype=all`);
}

export const getLocation = () =>{
    return MapAxios.get(`/ip?key=${GaoDeUserKey}`)
}