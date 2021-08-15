import React, { FormEvent } from 'react';
import styles from './NavBar.module.css';
import { MdSearch } from 'react-icons/md';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import Container from '../Container/Container';
import { Body2 } from '../Typography/Typography';
import countriesList from '../../assets/data/city.list.min.json';
import { useState } from 'react';
import { useClickAway } from 'react-use';
import { useRef } from 'react';

export interface INavBarProps {}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IResult {
  name: string;
  id: number;
  coord: ICoords;
}

export interface IResultsProps {
  results: IResult[];
  handleBlur: () => any;
  handleItemClick: (item?: IResult) => any;
}

const Results: React.FC<IResultsProps> = ({
  results,
  handleBlur,
  handleItemClick,
}) => {
  const history = useHistory();
  const resultsRef = useRef<HTMLUListElement>(null);

  useClickAway(resultsRef, handleBlur);

  const match = useRouteMatch({ path: '/previsao', strict: true });

  const handleClick = ({ lat, lon }: ICoords) => {
    const path = match?.isExact ? match.path : '';
    history.push(`${path}/?lat=${lat}&lon=${lon}`);
  };

  const resultList = results?.map(res => {
    return (
      <li
        className={styles.resultItem}
        onClick={() => {
          handleClick(res.coord);
          handleItemClick(res);
        }}
        key={res.id}
      >
        <Body2>{res.name}</Body2>
      </li>
    );
  });

  return (
    <ul className={styles.results} ref={resultsRef}>
      {resultList && resultList.length > 0 ? (
        resultList
      ) : (
        <div className={styles.empty}>Nenhuma região encontrada.</div>
      )}
    </ul>
  );
};

const NavBar: React.FC<INavBarProps> = props => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState<IResult[]>();
  const [suggest, setSuggest] = useState(false);

  const handleInput = (e: FormEvent) => {
    setValue((e.target as HTMLInputElement).value);

    if (value.length < 3) {
      return;
    }

    setSuggest(true);

    const matches = (countriesList as IResult[]).filter(county =>
      county.name
        .toLocaleLowerCase()
        .match(value.replaceAll(/\\/g, '').toLocaleLowerCase())
    );

    setResults(matches.slice(0, 5));
  };

  const handleFocus = () => {
    if (!results || results.length < 0) {
      return;
    }

    setSuggest(true);
  };

  const handleBlur = () => {
    setSuggest(false);
  };

  const handleItemClick = () => {
    setValue('');
    setResults([]);
    setSuggest(false);
  };

  return (
    <Container>
      <div className={styles.navbar}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search"
            value={value}
            className={styles.input}
            onInput={handleInput}
            onFocus={handleFocus}
          />
          <div className={styles.searchIcon}>
            <MdSearch />
          </div>

          {results && suggest && (
            <Results
              handleBlur={handleBlur}
              handleItemClick={handleItemClick}
              results={results}
            />
          )}
        </div>
        <div className={styles.navigation}>
          <NavLink activeClassName={styles.activeLink} exact to="/">
            Agora
          </NavLink>
          <NavLink activeClassName={styles.activeLink} to="/previsao">
            Previsão
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
