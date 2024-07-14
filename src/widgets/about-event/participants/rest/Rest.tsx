import Text from '../../../../shared/ui/text/Text';
import styles from './Rest.module.scss';

interface RestProps {
  count: number;
}

const Rest = ({ count }: RestProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        {[
          { participantId: 'p10', name: 'Name 1', isOrganizer: true }, 
          { participantId: 'p11', name: 'Name 2', isOrganizer: true },
          { participantId: 'p12', name: 'Name 3', isOrganizer: true },
          { participantId: 'p13', name: 'Name 4', isOrganizer: true },
          { participantId: 'p14', name: 'Name 5', isOrganizer: true }
        ].slice(0, 3).map((img) => (
          <img src='' alt='img' className={styles.img} key={img.participantId} />
        ))}
      </div>
      <Text styleName='body' className={styles.description}>Еще +{count}</Text>
    </div>
  );
}

export default Rest;
