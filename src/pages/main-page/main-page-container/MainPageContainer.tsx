import { PropsWithChildren } from 'react';
import styles from './MainPageContainer.module.scss';

const MainPageContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className={styles.container}>
      {children}
    </main>
  );
}

export default MainPageContainer;
