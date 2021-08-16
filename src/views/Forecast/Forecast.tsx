import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useGeolocation } from 'react-use';
import ForecastItem from '../../components/ForecastItem/ForecastItem';
import Illustration from '../../components/Illustration/Illustration';
import LocationIllustration from '../../components/Illustration/LocationIllustration';
import { ICoords } from '../../components/NavBar/Navbar';
import { Title1 } from '../../components/Typography/Typography';
import useFetchData from '../../modules/useFetchData';
import { IForecastList } from '../../types';
import styles from './Forecast.module.css';

export interface IForecastProps {}

const Forecast: React.FC<IForecastProps> = props => {
  const [coord, setCoord] = useState<ICoords>();
  const geo = useGeolocation();
  const location = useLocation<{ lon: string; lat: string }>();

  const { data } = useFetchData<IForecastList>('forecast', coord);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    let lon = query.get('lon');
    let lat = query.get('lat');

    if (lon && !isNaN(+lon) && lat && !isNaN(+lat)) {
      setCoord({ lon: +lon, lat: +lat });
    }
  }, [location.search]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);

    console.log('using current user location');
    let lon = geo.longitude;
    let lat = geo.latitude;

    if (query.has('lon') && query.has('lat')) {
      return;
    }

    if (lon && !isNaN(+lon) && lat && !isNaN(+lat)) {
      setCoord({ lon: +lon, lat: +lat });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geo.longitude, geo.latitude]);

  const forecastList = data?.list.map((d, idx) => (
    <div className={styles.forecastItem} key={d.dt}>
      <ForecastItem
        wind={d.wind.speed}
        deg={d.wind.deg}
        clouds={d.weather[0].description}
        weather={d.weather[0].main!}
        max={d.main.temp_max}
        min={d.main.temp_min}
        icon={d.weather[0].icon}
        date={new Date(d.dt * 1000)}
      />
    </div>
  ));

  return (
    <div className={styles.forecast}>
      {data ? (
        <>
          <div className={styles.titleWrapper}>
            <Title1>
              <h1 className={styles.title}>{data?.city.name}</h1>
            </Title1>
          </div>
          {forecastList}
        </>
      ) : (
        <Illustration Illustration={LocationIllustration}>
          Nenhuma região selecionada.
        </Illustration>
      )}
    </div>
  );
};

export default Forecast;
