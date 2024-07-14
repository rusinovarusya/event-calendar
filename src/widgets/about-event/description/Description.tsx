import classNames from 'classnames';
import Icon from '../../../shared/ui/icon/Icon';
import Text from '../../../shared/ui/text/Text';
import styles from './Description.module.scss';

interface DescriptionProps {
  eventId: string;
}

const Description = ({ eventId }: DescriptionProps) => {
  const name = 'Event name';
  const day = 'day';
  const date = 'date';
  const time = 'time';
  const address = 'address';
  const description = 'Это независимый музыкальный фестиваль талантливых артистов, которые уже собирают крупнейшие залы поклонников по всей России или только начинают свой творческий путь. Главное, что объединяет участников фестиваля — эмоции, которые они передают слушателям, погружая их в особенную атмосферу своего выступления.';
  const hasEventAlreadyPassed = true;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Text styleName='h3' className={styles.title}>{name}</Text>
        {hasEventAlreadyPassed && (
          <div className={styles.warning}>
            <Icon name='x24-info' width={24} height={24} />
            <Text styleName='body' className={styles.warningText}>Мероприятие уже прошло</Text>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={classNames(styles.basicInformation, { [styles.passed]: hasEventAlreadyPassed })}>
          <div className={styles.datetime}>
            <Text styleName='h4'>{day}</Text>
            <Text styleName='h4'>{date}</Text>
            <Text styleName='h4'>{time}</Text>
          </div>
          <Text styleName='body' className={styles.address}>{address}</Text>
        </div>
        <Text styleName='body' className={styles.description}>{description}</Text>
      </div>
    </div>
  );
}

export default Description;
