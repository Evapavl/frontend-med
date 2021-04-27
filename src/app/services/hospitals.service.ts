import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HospitalParamsModel } from '../models/hospital-param.model';
import { Hospital } from '../models/hospitals.model';
import { JsonHttpParams } from '../shared/types/json-http-params';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor(private httpClient: HttpClient) {}

  getHospitals(): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>(`${environment.apiUrl}/hospitals`);
  }

  getHospitalById(hospitalId: string): Observable<Hospital> {
    const url = `${environment.apiUrl}/hospitals/${hospitalId}`;
    return this.httpClient.get<Hospital>(url);
  }

  getFilteredHospital(params: Partial<HospitalParamsModel>): Observable<Hospital[]> {
    const url = `${environment.apiUrl}/hospitals`;
    console.log(params);
    return this.httpClient.get<Hospital[]>(url, {params: params as JsonHttpParams});
  }
}
