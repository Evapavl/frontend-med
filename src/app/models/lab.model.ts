export interface Lab {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  schedules: Schedules[];
  tests: string[];
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
