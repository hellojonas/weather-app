import React from 'react';
import Illustration from '../../components/Illustration/Illustration';
import LocationIllustration from '../../components/Illustration/LocationIllustration';
import styles from './Home.module.css';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = props => {
  return (
    <div className={styles.home}>
      <Illustration Illustration={LocationIllustration}>
        Nenhuma região selecionada.
      </Illustration>
    </div>
  );
};

export default Home;
