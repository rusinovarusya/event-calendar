import { useState } from 'react';
import styles from './Authentication.module.scss';
import EmailForm from '../../features/forms/email-form/EmailForm';
import PasswordForm from '../../features/forms/password-form/PasswordForm';
import RegistrationForm from '../../features/forms/registration-form/RegistrationForm';
import Modal from '../../shared/ui/modal/Modal';
import Text from '../../shared/ui/text/Text';

interface AuthenticationProps {
  closeModal: () => void;
}

const Authentication = ({ closeModal }: AuthenticationProps) => {
  const [activeStep, setActiveStep] = useState('email');

  return (
    <Modal width={600} closeModal={closeModal}>
      <div className={styles.container}>
        {activeStep === 'email' && (
          <>
            <Text styleName='h3' className={styles.title}>Вход</Text>
            <EmailForm onSubmit={() => {setActiveStep('password')}} />
          </>
        )}
        {activeStep === 'password' && (
          <>
            <Text styleName='h3' className={styles.title}>Вход</Text>
            <PasswordForm onSubmit={() => {}} />
          </>
          
        )}
        {activeStep === 'registration' && (
          <>
            <Text styleName='h3' className={styles.title}>Регистрация</Text>
            <RegistrationForm onSubmit={() => {}} />
          </>
        )}
      </div>
    </Modal>
  );
}

export default Authentication;
