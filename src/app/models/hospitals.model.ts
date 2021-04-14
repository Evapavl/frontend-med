export interface Hospital {
  id: number;
  location: Location[];
  name: string;
  phone: string;
  address: string;
  departments: string[];
}

interface Location {
  latitude: number;
  longitude: number;
}
