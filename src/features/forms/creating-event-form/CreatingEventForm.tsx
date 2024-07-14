import { useForm } from 'react-hook-form';
import styles from './CreatingEventForm.module.scss';
import Button from '../../../shared/ui/button/Button';
import Input from '../../../entities/input/Input';
import InputImage from '../../../entities/input-image/InputImage';

const CreatingEventForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      description: '',
      participant: [],
      start: '',
      end: '',
      time: '',
      place: '',
      images: []
    },
  });

  const submit = () => {}

  return (
    <>
      <form id='creating-event-form'>
        <div className={styles.content}>
          <Input className={styles.name} type='text' label='Название' { ...register('name', {}) } />
          <Input className={styles.description} type='text' label='Описание' { ...register('description', {}) } />
          <Input className={styles.participants} type='text' label='Участники' { ...register('participant', {}) } />

          <div className={styles.period}>
            <Input type='date' label='Начало' { ...register('start', {}) } />
            <Input type='date' label='Конец' { ...register('end', {}) } />
          </div>
          <div className={styles.timeAndPlace}>
            <Input className={styles.time} type='time' label='Время' { ...register('time', {}) } />
            <Input className={styles.place} type='text' label='Место проведения' { ...register('place', {}) } />
          </div>
          <p className={styles.organizer}>organizer</p>
          <InputImage className={styles.inputImage} { ...register('images', {}) } />
          <div className={styles.selectedImages}>Selected images</div>
        </div>
      </form>
      <Button component='input' type='submit' form='creating-event-form' value='Создать' status='primary' onClick={handleSubmit(submit)} />
    </>
  );
}

export default CreatingEventForm;
