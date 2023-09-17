import { ProgressBar } from 'react-loader-spinner';

import styles from './Loader.module.css';

import Container from 'components/Container/Container';

const Loader = () => {
  const color = "#133280";

  return (
    <Container>
      <div className={styles.loader}>
        <ProgressBar
          wrapperClass={styles.icon}
          barColor={color}
          borderColor={color}
        />
      </div>
    </Container>
  );
};

export default Loader;
