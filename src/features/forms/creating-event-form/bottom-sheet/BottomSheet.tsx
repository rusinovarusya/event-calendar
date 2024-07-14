import classNames from 'classnames';
import Icon from '../../../../shared/ui/icon/Icon';
import Text from '../../../../shared/ui/text/Text';
import styles from './BottomSheet.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { getNextMonthDateId, getPreviousMonthDateId } from '../../../slices/inputDateSlice';
import { getMonthWithRest } from '../../../model/date/getMonthWithRest';
import Button from '../../../../shared/ui/button/Button';
import { getMonthTitle } from '../../../model/date/getMonthTitle';

const BottomSheet = () => {
  const dispatch = useDispatch();
  const dateId = useSelector((state: RootState) => state.inputDate.dateId);
  const dateObject = new Date(dateId);
  const monthTitle = getMonthTitle(dateObject);
  const monthWithRest = getMonthWithRest(dateId);

  const switchToPreviousMonth = () => {
    dispatch(getPreviousMonthDateId());
  }

  const switchToNextMonth = () => {
    dispatch(getNextMonthDateId());
  }

  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <div className={styles.row}>
          <button onClick={switchToPreviousMonth}>
            <Icon name='left-arrow' width={24} height={24} />
          </button>
          <Text styleName='h4' className={styles.title}>{monthTitle}</Text>
          <button onClick={switchToNextMonth}>
            <Icon name='right-arrow' width={24} height={24} />
          </button>
        </div>
        <div className={styles.monthGrid}>
          {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((day) => (
            <Text styleName='body' className={styles.day} key={day}>{day}</Text>
          ))}
          {monthWithRest.map((date) => (
            <Text styleName='body' className={classNames(styles.date, styles[date.status] )} key={date.dateId}>{date.date}</Text>
          ))}
        </div>
      </div>
      <Button status='primary' onClick={() => {}}>Применить</Button>
    </div>
  );
}

export default BottomSheet;
