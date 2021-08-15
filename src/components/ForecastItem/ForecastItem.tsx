import React from 'react';
import { formatDate } from '../../modules/formatDate';
import WeatherCard, { IWeatherCardProps } from '../WeatherCard/WheaderCard';
import styles from './ForecastItem.module.css';

export interface IForecastItemProps extends IWeatherCardProps {
  wind: string;
  clouds: string;
  weather: string;
  date?: Date;
}

const ForecastItem: React.FC<IForecastItemProps> = ({
  wind,
  clouds,
  weather,
  max,
  min,
  icon,
  date,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.weatherCard}>
        <WeatherCard max={max} min={min} icon={icon} />
        {date ? <div className={styles.date}>{formatDate(date)}</div> : null}
      </div>

      <div className={styles.aside}>
        <div className={styles.typeWrapper}>
          <span className={styles.type}>Clima: </span>
          <span className={styles.typeValue}>{weather}</span>
        </div>
        <div className={styles.typeWrapper}>
          <span className={styles.type}>Vento: </span>
          <span className={styles.typeValue}>{wind}</span>
        </div>
        <div className={styles.typeWrapper}>
          <span className={styles.type}>Ceu: </span>
          <span className={styles.typeValue}>{clouds}</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
