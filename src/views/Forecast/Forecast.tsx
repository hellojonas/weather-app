import React from 'react';
import styles from './Forecast.module.css';

export interface IForecastProps {}

const Forecast: React.FC<IForecastProps> = props => {
  return <div className={styles.forecast}></div>;
};

export default Forecast;
