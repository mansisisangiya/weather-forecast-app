import moment from 'moment';

const getCurrentDayForecast = (data, title) => ({
   // weekday: moment(data.applicable_date).format('dddd'),
    date: moment(data.localtime).format('MMMM Do'),
    location: title,
    temperature: Math.round(data.temperature),
    weatherIcon: data.weather_icons[0],
    weatherDescription: data.weather_descriptions[0],
});

export default getCurrentDayForecast;