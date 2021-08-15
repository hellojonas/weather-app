import React from 'react';
import { Body2 } from '../Typography/Typography';
import styles from './Illustration.module.css';

export interface IIllustrationProps {
  Illustration: any;
}

const Illustration: React.FC<IIllustrationProps> = ({
  Illustration,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.illustration}>
        <Illustration />
      </div>
      <Body2>{children}</Body2>
    </div>
  );
};

export default Illustration;
