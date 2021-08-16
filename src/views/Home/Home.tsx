import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useGeolocation } from 'react-use';
import ForecastItem from '../../components/ForecastItem/ForecastItem';
import Illustration from '../../components/Illustration/Illustration';
import LocationIllustration from '../../components/Illustration/LocationIllustration';
import { ICoords } from '../../components/NavBar/Navbar';
import { Title1 } from '../../components/Typography/Typography';
import useFetchData from '../../modules/useFetchData';
import styles from './Home.module.css';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = props => {
  const [coord, setCoord] = useState<ICoords>();
  const geo = useGeolocation();
  const location = useLocation<{ lon: string; lat: string }>();

  const { data } = useFetchData('current', coord);

  useEffect(() => {
    console.log('using current user locations');
    let lon = geo.longitude;
    let lat = geo.latitude;

    // if (coord?.lat && coord.lon) {
    //   return;
    // }

    if (lon && !isNaN(+lon) && lat && !isNaN(+lat)) {
      setCoord({ lon: +lon, lat: +lat });
    }
  }, [geo.longitude, geo.latitude]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    let lon = query.get('lon');
    let lat = query.get('lat');

    if (lon && !isNaN(+lon) && lat && !isNaN(+lat)) {
      setCoord({ lon: +lon, lat: +lat });
    }
  }, [location.search]);

  return (
    <div className={styles.home}>
      {data && (
        <Title1>
          <h1 className={styles.title}>{data.name}</h1>
        </Title1>
      )}

      {data ? (
        <>
          <ForecastItem
            wind={data.wind.speed}
            deg={data.wind.deg}
            clouds={data.weather[0].description}
            weather={data.weather[0].main!}
            max={data.main.temp_max}
            min={data.main.temp_min}
            icon={data.weather[0].icon}
            date={new Date(data.dt * 1000)}
          />
        </>
      ) : (
        <Illustration Illustration={LocationIllustration}>
          Nenhuma região selecionada.
        </Illustration>
      )}
    </div>
  );
};

export default Home;
