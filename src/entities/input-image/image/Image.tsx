import Icon from '../../../shared/ui/icon/Icon';
import styles from './Image.module.scss';

const Image = () => {
  return (
    <div className={styles.container}>
      <button><Icon name='cross' width={24} height={24} /></button>
    </div>
  );
}

export default Image;
