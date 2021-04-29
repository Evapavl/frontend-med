import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrivateDoctor } from '../models/private-doctors.model';
import { PrivateDoctorParamsModel } from '../models/private-doctor-param.model';
import { JsonHttpParams } from '../shared/header/type/json-http-params';

@Injectable({
  providedIn: 'root'
})
export class PrivateDoctorsService {

  constructor(private httpClient: HttpClient) {}

  getPrivateDoctors(): Observable<PrivateDoctor[]> {
    return this.httpClient.get<PrivateDoctor[]>(`${environment.apiUrl}/private-doctors`);
  }

  getFilteredPrivateDoctors(params: Partial<PrivateDoctorParamsModel>): Observable<PrivateDoctor[]> {
    const url = `${environment.apiUrl}/private-doctors`;
    console.log(params);
    return this.httpClient.get<PrivateDoctor[]>(url, {params: params as JsonHttpParams});
  }
}
