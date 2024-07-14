import classNames from 'classnames';
import Text from '../../shared/ui/text/Text';
import styles from './InputImage.module.scss';

interface InputImageProps {
  className?: string;
}

const InputImage = ({ className }: InputImageProps) => {
  const handleFileChange = () => {}

  return (   
    <label htmlFor='' className={classNames(styles.label, className && styles[className])}>
      <input type='file' className={styles.input} name='' id='' accept='image/png, image/jpeg' multiple onChange={handleFileChange} />
      <Text styleName='body' className={styles.description}>Выберите фото или перетащите сюда</Text>
    </label>
  );
}

export default InputImage;
