import React from 'react';
import styles from './PageNotFound.module.css';
import Illustration from '../../components/Illustration/Illustration';
import PageNotFoundIllustration from '../../components/Illustration/PageNotFoundIllustration';
import { Link } from 'react-router-dom';

export interface IPageNotFoundProps {}

const PageNotFound: React.FC<IPageNotFoundProps> = props => {
  return (
    <div className={styles.notFound}>
      <Illustration Illustration={PageNotFoundIllustration}>
        Página não encontrada&nbsp;
        <Link className={styles.homeLink} to="/">
          Ir para página inical
        </Link>
        .
      </Illustration>
    </div>
  );
};

export default PageNotFound;
