import Text from '../../../shared/ui/text/Text';
import Participant from './participant-item/ParticipantItem';
import styles from './Participants.module.scss';
import Rest from './rest/Rest';

interface ParticipantsProps {
  eventId: string;
}

const Participants = ({ eventId }: ParticipantsProps) => {
  const participants = [
    { participantId: `p0-${eventId}`, name: 'Name 1', isOrganizer: true }, 
    { participantId: `p1-${eventId}`, name: 'Name 1', isOrganizer: false }, 
    { participantId: `p2-${eventId}`, name: 'Name 1', isOrganizer: false }, 
    { participantId: `p3-${eventId}`, name: 'Name 1', isOrganizer: false }, 
    { participantId: `p4-${eventId}`, name: 'Name 1', isOrganizer: true }
  ];

  return (
    <div className={styles.container}>
      <Text styleName='h3' className={styles.title}>Участники</Text>
      <div className={styles.content}>
        {participants.map((participant) => (
          <Participant participant={participant} key={participant.participantId} />
        ))}
        <Rest count={5} />
      </div>
    </div>
  );
}

export default Participants;
