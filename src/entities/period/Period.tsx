import { useState } from 'react';
import BottomSheet from '../../features/forms/creating-event-form/bottom-sheet/BottomSheet';
import styles from './Period.module.scss';
import Input from '../input/Input';

interface PeriodProps {}

const Period = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={styles.container}>
      <Input type='date' className={styles.start} label='' name='start' onFocus={() => setOpened(true)} />
      <Input type='date' className={styles.end} label='' name='end'  onFocus={() => setOpened(true)} />
      {opened && <BottomSheet />}
    </div>
  );
}

export default Period;
