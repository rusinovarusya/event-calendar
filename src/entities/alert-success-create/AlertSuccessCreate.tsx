import AlertSuccess from '../alert-success/AlertSuccess';

interface AlertSuccessCreateProps {
  eventId: string;
  onClick: () => void;
}

const AlertSuccessCreate = ({ eventId, onClick }: AlertSuccessCreateProps) => {
  return (
    <AlertSuccess eventId={eventId} title='Ура!' description='Вы добавили новое событие' img='unicorn' onClick={onClick} />
  );
}

export default AlertSuccessCreate;
