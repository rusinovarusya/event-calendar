import Alert from '../../shared/ui/alert/Alert';
import Text from '../../shared/ui/text/Text';
import styles from './AlertSuccess.module.scss';

interface AlertSuccessProps {
  eventId: string;
  title: string;
  description: string;
  img: 'unicorn' | 'hand';
  onClick: () => void;
}

const AlertSuccess = ({ eventId, title, description, img, onClick }: AlertSuccessProps) => {
  const { eventName, day, date, time, address } = { eventName: 'Event name', day: 'Day', date: 'Date', time: 'Time', address: 'Address' };

  return (
    <Alert title={title} buttonTitle='Отлично' img={img} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.eventTitle}>
          <Text styleName='h4'>{description}:</Text>
          <Text styleName='h4' className={styles.emphasized}>{eventName}</Text>
        </div>
        <div className={styles.eventDescription}>
          <div className={styles.datetime}>
            <Text styleName='h4'>{day}</Text>
            <div className={styles.delimiter} />
            <Text styleName='h4'>{date}</Text>
            <div className={styles.delimiter} />
            <Text styleName='h4'>{time}</Text>
          </div>
          <Text styleName='body' className={styles.address}>{address}</Text>
        </div>
      </div>
    </Alert>
  );
}

export default AlertSuccess;
