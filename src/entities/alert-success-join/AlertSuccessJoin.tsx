import AlertSuccess from '../alert-success/AlertSuccess';

interface AlertSuccessJoinProps {
  eventId: string;
  onClick: () => void;
}

const AlertSuccessJoin = ({ eventId, onClick }: AlertSuccessJoinProps) => {
  return (
    <AlertSuccess eventId={eventId} title='Поздравляем!' description='Вы теперь участник события' img='hand' onClick={onClick} />
  );
}

export default AlertSuccessJoin;
