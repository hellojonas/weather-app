import React from 'react';
import ForecastItem from '../../components/ForecastItem/ForecastItem';
import styles from './Forecast.module.css';

export interface IForecastProps {}

const Forecast: React.FC<IForecastProps> = props => {
  return (
    <div className={styles.forecast}>
      <ForecastItem
        max={26}
        min={18}
        icon="wi-day-cloudy"
        clouds="Limpo"
        weather="Ensolarado"
        wind="300 m/s, 150°"
        date={new Date()}
      />
    </div>
  );
};

export default Forecast;
