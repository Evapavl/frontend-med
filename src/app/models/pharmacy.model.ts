export interface Pharmacy {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  workSchedule: WorkSchedule;
}

export interface Location {
  latitude: number;
  longitude: number;
}

interface WorkSchedule {
  day: string;
  timeStartOfWorkDay: string;
  timeEndOfWorkDay: string;
}
