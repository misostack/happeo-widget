export enum WorkingLocationType {
  officeLocation = "officeLocation",
  homeOffice = "homeOffice",
  outOfOffice = "outOfOffice",
  other = "other",
}
export default interface CalendarEvent {
  locationType: WorkingLocationType;
  start: {
    datetime: string;
    timeZone: string;
  };
  end: {
    datetime: string;
    timeZone: string;
  };
}
