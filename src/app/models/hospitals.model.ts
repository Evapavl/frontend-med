export interface Hospital {
  id: number;
  location: Location[];
  name: string;
  typeOfProperty: string;
  phone: string;
  address: string;
  departments: string[];
}

interface Location {
  latitude: number;
  longitude: number;
}
