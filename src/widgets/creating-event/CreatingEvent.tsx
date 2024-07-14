import { useDispatch } from 'react-redux';
import CreatingEventForm from '../../features/forms/creating-event-form/CreatingEventForm';
import Modal from '../../shared/ui/modal/Modal';
import Text from '../../shared/ui/text/Text';
import styles from './CreatingEvent.module.scss';
import { setCreateEventModalInvisible } from '../../features/slices/modalSlice';

const CreatingEvent = () => {
  const dispatch = useDispatch();

  return (
    <Modal width={1076} closeModal={() => {dispatch(setCreateEventModalInvisible())}}>
        <div className={styles.container}>
        <Text styleName='h3' className={styles.title}>Создание события</Text>
        <CreatingEventForm />
      </div>
    </Modal>
  );
}

export default CreatingEvent;
