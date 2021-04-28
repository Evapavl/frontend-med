export interface Clinic {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  schedules: Schedules[];
  doctors: string[];
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
