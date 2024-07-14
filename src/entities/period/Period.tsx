import BottomSheet from '../../features/forms/creating-event-form/bottom-sheet/BottomSheet';
import styles from './Period.module.scss';
import Input from '../input/Input';

const Period = () => {
  return (
    <div className={styles.container}>
      <Input type='date' className={styles.start} label='' name='start' />
      <Input type='date' className={styles.end} label='' name='end' />
      <BottomSheet />
    </div>
  );
}

export default Period;
