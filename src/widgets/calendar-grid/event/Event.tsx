import classNames from 'classnames';
import styles from './Event.module.scss';
import Text from '../../../shared/ui/text/Text';

interface EventProps {
  title: string;
  status: 'passive' | 'active';
}

const Event = ({ title, status }: EventProps) => {
  return (
    <Text styleName='body' className={classNames(styles.container, styles[status])}>{title}</Text>
  );
}

export default Event;
