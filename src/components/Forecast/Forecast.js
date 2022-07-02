
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';
import styles from './Forecast.module.css';


const Forecast = ({ forecast }) => (
       
      <Container className={styles.box}>
      <Row>
          <Col xs={12} md={4}>
              <div className={styles.card}>
                  
                  <CurrentDay {...forecast.currentDay} />
              </div>
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
              <CurrentDayDescription forecast={forecast.currentDayForecast} />
            
          </Col>
      </Row>
    </Container>);
  

    Forecast.propTypes = {
        forecast: PropTypes.shape({
          currentDay: PropTypes.object,
          currentDayDetails: PropTypes.array,
          
       }),
};

export default Forecast;
  
