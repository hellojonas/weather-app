import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICoords } from '../components/NavBar/Navbar';
import { IForecast } from '../types';

const useFetchData = (type: 'current' | 'forecast', coord?: ICoords) => {
  const [data, setData] = useState<IForecast>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { lat, lon } = coord;

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_OPENWEATHER_API;
    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;

    if (!coord) {
      setIsLoading(false);
      return;
    }

    const url = `${apiUrl}?lon=${coord.lon}&lat=${coord.lat}&appid=${apiKey}&units=metric&lang=pt`;

    axios
      .get(url)
      .then(res => {
        if (res.statusText !== 'OK') {
          throw new Error('Failed to get resouce.');
        }
        setData(res.data);
        setError(null);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
      });
  }, [coord, type]);

  return { data, error, isLoading };
};

export default useFetchData;
