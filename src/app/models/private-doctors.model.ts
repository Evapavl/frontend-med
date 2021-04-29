import { Schedule } from './schedule.model';
import { Location } from './location.model';

export interface PrivateDoctor {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  schedules: Schedule[];
  specialization: string;
  rating: number;
  site: string;
}
