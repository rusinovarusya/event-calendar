import { PropsWithChildren } from 'react';
import Text from '../text/Text';
import styles from './Alert.module.scss';
import Icon from '../icon/Icon';
import classNames from 'classnames';
import Modal from '../modal/Modal';
import Button from '../button/Button';

interface AlertProps {
  title: string;
  buttonTitle: string;
  img: 'pigeon' | 'unicorn' | 'hand';
  onClick: () => void;
}

const Alert = ({ title, buttonTitle, img, onClick, children }: PropsWithChildren<AlertProps>) => {
  return (
    <Modal width={770} closeModal={onClick}>
      <div className={styles.container}>
        <Text styleName='h2' className={styles.title}>{title}</Text>
        {children}
        <Icon name={img} className={classNames(styles.img, { [styles.pigeon]: 'pigeon', [styles.unicorn]: 'unicorn', [styles.hand]: 'hand' })} />

        <Button status='primary' onClick={onClick}>{buttonTitle}</Button>
      </div>
    </Modal>
  );
}

export default Alert;
