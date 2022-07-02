import React,{Fragment} from 'react';
import styles from './Page.module.css';
import Header from '../Header/Header';
import Forecast from '../Forecast/Forecast';
import Error from '../Error/Error';
import Form from '../Form/Form';
import Loader  from '../Loader/Loader';
import useForecast from '../../hooks/useForecast'



export default function Page() {
    //custom USEFORECAST hook
    const { isError, isLoading, forecast,submitRequest} = useForecast();
     const onSubmit = value => {
        console.log({value});
       submitRequest(value);
     };
     //console.log(forecast);

    return (
        <Fragment>
           <Header/>
           {!forecast && (
                <div className={`${styles.box} position-relative`}>
                   
                    {!isLoading && <Form submitSearch={onSubmit} />}
                    
                    {isError && <Error message={isError} />}
                  
                    {isLoading && <Loader/>}
                </div>
            )}
            
            {forecast && <Forecast forecast={forecast} />}
            
        </Fragment>
       );

}
