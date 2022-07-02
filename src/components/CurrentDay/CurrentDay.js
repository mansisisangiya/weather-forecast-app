import React from 'react';
import PropTypes from 'prop-types';

import locationIcon from './src/location-pin.png';
import styles from './CurrentDay.module.css';

const CurrentDay = ({date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
      
        <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-4 pb-5 pl-2`}>
            <div>
               
                <p className="mb-0">{date}</p>
                <br/>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img width="10" height="15" src={locationIcon} className="mr-1" alt="location pin icon" />
                                        <span > {location}</span>
                   
                   
                </p>
            </div>
            <div>
               
            <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>°C
                </h2>
                
            <img width="45" src={weatherIcon} alt="" />
               
                
                <h5 className="font-weight-lighter">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

CurrentDay.propTypes = {
    
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
   
    weatherIcon: PropTypes.string.isRequired,
    weatherDescription: PropTypes.string.isRequired,
    
};

export default CurrentDay;