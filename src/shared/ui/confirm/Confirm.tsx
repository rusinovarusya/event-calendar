import Button from '../button/Button';
import Modal from '../modal/Modal';
import Text from '../text/Text';
import styles from './Confirm.module.scss';

interface ConfirmProps {
  question: string;
  onClick: () => void;
  agree?: () => void;
  disagree?: () => void;
}

const Confirm = ({ question, onClick, agree, disagree }: ConfirmProps) => {

  return (
    <Modal width={710} closeModal={onClick}>
      <div className={styles.container}>
        <Text styleName='h3' className={styles.title}>{question}</Text>
        <Button status='secondary' onClick={disagree}>Нет</Button>
        <Button status='primary' onClick={agree}>Да</Button>
      </div>
    </Modal>
  );
}

export default Confirm;
