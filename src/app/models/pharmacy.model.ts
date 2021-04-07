export interface Pharmacy {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  schedules: Schedules[];
}

interface Location {
  latitude: number;
  longitude: number;
}

interface Schedules {
  dayOfWeek: string;
  timeStartOfWorkDay: string;
  timeEndOfWorkDay: string;
}
