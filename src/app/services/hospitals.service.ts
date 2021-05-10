import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HospitalParamsModel } from '../models/hospital-param.model';
import { Hospital } from '../models/hospitals.model';
import { JsonHttpParams } from '../modules/shared/types/json-http-params';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  params: Partial<HospitalParamsModel> = {};

  constructor(private httpClient: HttpClient) {}

  getRequestParams(nameHospital?: string[], typeOfProperty?: string, nameOfDepartments?: string[]): void {
    if (nameHospital) { this.params.name = nameHospital; }
    if (typeOfProperty) {
      this.params.typeOfProperty = typeOfProperty;
    }
    if (nameOfDepartments) {
      this.params.departments_like = nameOfDepartments;
    }
  }

  getHospitals(): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>(`${environment.apiUrl}/hospitals`);
  }

  getHospitalById(hospitalId: string): Observable<Hospital> {
    const url = `${environment.apiUrl}/hospitals/${hospitalId}`;
    return this.httpClient.get<Hospital>(url);
  }

  getFilteredHospital(): Observable<Hospital[]> {
    const url = `${environment.apiUrl}/hospitals`;
    return this.httpClient.get<Hospital[]>(url, {params: this.params as JsonHttpParams});
  }
}
