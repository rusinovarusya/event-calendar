export interface IDate {
  dateId: string;
  date: number;
  status: 'passive' | 'active';
  events?: IEvent[];
}

export interface IEvent {
  eventId: string;
  name: string;
}
