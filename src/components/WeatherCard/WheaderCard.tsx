import React from 'react';
import styles from './WeatherCard.module.css';
import '../../assets/css/weather-icons.css';

export interface IWeatherCardProps {
  icon?: string;
  min: number;
  max: number;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ min, max, icon }) => {
  // TODO: Map openweather icon
  const iconClasses = ['wi', icon, styles.icon];

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <i className={iconClasses.join(' ')} />
      </div>

      <div className={styles.temperature}>
        <div className={styles.maxWrapper}>
          <span className={styles.max}>{max} °C</span>
          <span className={styles.maxBottom}>max</span>
        </div>

        <div className={styles.minWrapper}>
          <span className={styles.min}>{min} °C</span>
          <span className={styles.minBottom}>min</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
