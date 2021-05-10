import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrivateDoctor } from '../models/private-doctors.model';
import { PrivateDoctorParamsModel } from '../models/private-doctor-param.model';
import { JsonHttpParams } from '../modules/shared/types/json-http-params';

@Injectable({
  providedIn: 'root'
})
export class PrivateDoctorsService {

  params: Partial<PrivateDoctorParamsModel> = {};

  constructor(private httpClient: HttpClient) {}

  getRequestParams(namePrivateDoctor?: string[], specializationOfDoctor?: string[]): void {
    if (namePrivateDoctor) { this.params.name = namePrivateDoctor; }
    if (specializationOfDoctor) {
      this.params.specialization = specializationOfDoctor;
    }
  }

  getPrivateDoctors(): Observable<PrivateDoctor[]> {
    return this.httpClient.get<PrivateDoctor[]>(`${environment.apiUrl}/private-doctors`);
  }

  getAllSpecialization(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/allSpecializations`);
  }

  getFilteredPrivateDoctors(): Observable<PrivateDoctor[]> {
    const url = `${environment.apiUrl}/private-doctors`;
    return this.httpClient.get<PrivateDoctor[]>(url, {params: this.params as JsonHttpParams});
  }
}
