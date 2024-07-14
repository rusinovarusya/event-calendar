import { useSelector } from 'react-redux';
import Text from '../../shared/ui/text/Text';
import styles from './CalendarGrid.module.scss';
import Event from './event/Event';
import { RootState } from '../../app/store';
import { getMonthWithRestByWeek } from '../../features/model/date/getMonthWithRestByWeek';
import { IDate, IEvent } from '../../shared/api/types';

const CalendarGrid = () => {
  const dateId = useSelector((state: RootState) => state.calendar.dateId);
  const monthWithRest = getMonthWithRestByWeek(dateId);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
            <th className={styles.th} key={day}>
              <Text styleName='h3'>{day}</Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {monthWithRest.map((week, index) => (
          <tr className={styles.row} key={index}>
            {week.map((day: IDate) => (
     
              <td className={styles.cell} key={day.dateId}>
        
                <Text styleName='body' className={styles[day.status]}>{day.date}</Text>
                {day.events && <div className={styles.eventContainer}>
                  {day.events?.map((event: IEvent) => (
                    <Event title={event.name} status={day.status} key={event.eventId} />
                  ))}
                </div>}
     
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CalendarGrid;
