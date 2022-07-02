import { useState } from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';


const BASE_URL = 'http://api.weatherstack.com/';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;


const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

     const getForcastdata = async location => {
        const { data } = await axios(`${REQUEST_URL}/current`, { params: {  access_key:'3d129f9911c6f1a7eefad9182ed592be' , query: location } });
        if(data.error){ 
            //console.log("error section");
            setError("There is no such location");
            setLoading(false);
            
            return;}
       
        return data;
    }
       const gatherForecastData = data =>{
        const currentDay= getCurrentDayForecast(data.current,data.location.name);
        const currentDayForecast = getCurrentDayDetailedForecast(data.current);
        console.log(currentDay);
        console.log(currentDayForecast);
        setForecast({currentDay,currentDayForecast});
        setLoading(false);

       };

        const submitRequest = async location => {
        const data = await getForcastdata(location);
        if(data.error){ 
         return;}
        setLoading(true);
        setError(false);
        gatherForecastData(data);
        console.log( data); 
        //console.log(data.current.is_day);

    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};

export default useForecast;