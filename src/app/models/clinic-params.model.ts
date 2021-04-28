export interface ClinicParamsModel {
  name: string;
  doctors_like: string[];
  rating_gte: number;
  rating_lte: number;
}
