import { useForm } from 'react-hook-form';
import { isValidPassword, passwordFormatErrorMessage } from '../../helpers/isValidPassword';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import styles from './PasswordForm.module.scss';

interface PasswordFormProps {
  onSubmit: () => void;
}

const PasswordForm = ({ onSubmit }: PasswordFormProps) => {
  const { register, handleSubmit, setError, getValues, formState } = useForm({
    defaultValues: {
      password: '',
    },
    mode: 'onSubmit'
  });

  const submit = () => {
    onSubmit();
  }

  return (
    <form className={styles.form}>
      <Input type='password' label='Пароль' placeholder='' { ...register('password', {
        required: { value: true, message: 'Обязательное поле' },
        validate: (value) => {
          if (value && !isValidPassword(value)) {
            setError('password', { message: passwordFormatErrorMessage });
            return false;
          } else {
            return true;
          }
        }
      })} />
      <Button component='input' type='button' value='Войти' status='primary' disabled={!formState.isValid} onClick={handleSubmit(submit)} />
    </form>
  );
}

export default PasswordForm;
