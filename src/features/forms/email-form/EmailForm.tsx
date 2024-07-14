import { useForm } from 'react-hook-form';
import { isValidEmail } from '../../helpers/isValidEmail';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import { passwordFormatErrorMessage } from '../../helpers/isValidPassword';
import styles from './EmailForm.module.scss';
import { ErrorMessage } from '@hookform/error-message';
import Text from '../../../shared/ui/text/Text';

interface EmailFormProps {
  onSubmit: () => void;
}

const EmailForm = ({ onSubmit }: EmailFormProps) => {
  const { register, handleSubmit, setError, formState } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onChange'
  });

  const submit = () => {
    onSubmit();
  }

  return (
    <form className={styles.form}>
      <Input type='email' label='E-mail' placeholder='' { ...register('email', {
        required: { value: true, message: 'Обязательное поле' },
        validate: (value) => {
          if (value && !isValidEmail(value)) {
            setError('email', { message: passwordFormatErrorMessage });
            return false;
          } else {
            return true;
          }
        }
      })}
      error={formState.errors.email} 
      /> 
      <ErrorMessage
        errors={formState.errors}
        name='email'
        render={({ message }) => (
          <Text styleName='body' className={styles.noticeText}>
            {message}
          </Text>
        )}
      />
      <Button component='input' type='button' value='Далее' status='primary' disabled={!formState.isValid} onClick={handleSubmit(submit)} />
    </form>
  );
}

export default EmailForm;
