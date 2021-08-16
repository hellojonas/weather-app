import React from 'react';
import styles from './TemperatureCard.module.css';
import '../../assets/css/weather-icons.css';
import { daytimeIcons, nighttimeIcons } from '../../modules/openWeatherIconMap';

export interface ITemperatureCardProps {
  icon: string;
  min: number;
  max: number;
}

const TemperatureCard: React.FC<ITemperatureCardProps> = ({
  min,
  max,
  icon,
}) => {
  // TODO: Map openweather icon

  const mappedIcon =
    icon[2] === 'd'
      ? (daytimeIcons as { [i: string]: string })[icon]
      : (nighttimeIcons as { [i: string]: string })[icon];

  const iconClasses = ['wi', mappedIcon, styles.icon];

  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <i className={iconClasses.join(' ')} />
      </div>

      <div className={styles.temperature}>
        <div className={styles.maxWrapper}>
          <span className={styles.max}>{Math.round(max)} °C</span>
          <span className={styles.maxBottom}>max</span>
        </div>

        <div className={styles.minWrapper}>
          <span className={styles.min}>{Math.round(min)} °C</span>
          <span className={styles.minBottom}>min</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
