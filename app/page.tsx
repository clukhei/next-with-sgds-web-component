import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import {
  Masthead
} from '@/components';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Masthead />
    </div>
  );
};

export default Home;
