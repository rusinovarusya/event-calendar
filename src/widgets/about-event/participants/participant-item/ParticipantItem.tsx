import Text from '../../../../shared/ui/text/Text';
import styles from './ParticipantItem.module.scss';

interface ParticipantItemProps {
  participant: any;
}

const ParticipantItem = ({ participant }: ParticipantItemProps) => {
  return (
    <div className={styles.container}>
      <img src="" alt="" className={styles.img} />
      <div className={styles.nameContainer}>
        <Text styleName='body' className={styles.name}>{participant.name}</Text>
        {participant.isOrganizer && (
          <Text styleName='body' className={styles.label}>organizer</Text>
        )}
      </div>
    </div>
  );
}

export default ParticipantItem;
