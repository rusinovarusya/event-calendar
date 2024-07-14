import Alert from '../../shared/ui/alert/Alert';
import Text from '../../shared/ui/text/Text';
import styles from './AlertError.module.scss';

interface AlertErrorProps {
  onClick: () => void;
}

const AlertError = ({ onClick }: AlertErrorProps) => {
  return (
    <Alert title='Что-то пошло не так' buttonTitle='Хорошо' img='pigeon' onClick={onClick}>
      <Text styleName='h4' className={styles.emphasized}>Попробуйте позже</Text>
    </Alert>
  );
}

export default AlertError;
