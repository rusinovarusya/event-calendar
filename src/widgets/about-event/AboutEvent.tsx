import Text from '../../shared/ui/text/Text';
import Gallery from './gallery/Gallery';
import styles from './AboutEvent.module.scss';
import Participants from './participants/Participants';
import Description from './description/Description';

interface AboutEventProps {
  eventId: string;
}

const AboutEvent = ({ eventId }: AboutEventProps) => {
  const handleClick = () => {}

  return (
    <div className={styles.container}>
      <Description eventId={eventId} />
      <Participants eventId={eventId} />
      <Gallery eventId={eventId} />
      <Text styleName='h4' className={styles.enter}>
        <button className={styles.emphasized} onClick={handleClick}>Войдите</button>
      , чтобы присоединиться к событию</Text>
    </div>
  );
}

export default AboutEvent;
