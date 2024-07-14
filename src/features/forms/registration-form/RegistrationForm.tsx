import { useForm } from 'react-hook-form';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import { isValidPassword, passwordFormatErrorMessage } from '../../helpers/isValidPassword';
import styles from './RegistrationForm.module.scss';

interface RegistrationFormProps {
  onSubmit: () => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const { register, handleSubmit, setError, getValues, formState } = useForm({
    defaultValues: {
      firstName: '',
      password: '',
      repeatPassword: ''
    },
    mode: 'onSubmit'
  });

  const submit = () => {
    onSubmit();
  }

  return (
    <form className={styles.form}>
      <Input type='text' label='Ваше имя' placeholder='' { ...register('firstName', {
        required: { value: true, message: 'Обязательное поле' },
      }) } 
      />
  
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
      }) } 
      />
  
      <Input type='password' label='Повторить пароль' placeholder='' { ...register('repeatPassword', {
        required: { value: true, message: 'Обязательное поле' },
        validate: (value) => {
          if (value && !isValidPassword(value)) {
            setError('password', { message: passwordFormatErrorMessage });
            return false;
          } else {
            return true;
          }
        }
      }) } 
      />

      <Button component='input' type='submit' value={'Зарегистрироваться'} status='primary' disabled={!formState.isValid} onClick={handleSubmit(submit)} />
    </form>
  );
}

export default RegistrationForm;
