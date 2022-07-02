const currentDayForecast = data => [
   
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'air pressure',
        value: data.pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.max_temp),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.min_temp),
        unit: '°C',
    },
];

export default currentDayForecast;