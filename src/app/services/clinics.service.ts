import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Clinic } from '../models/clinic.model';
import { ClinicParamsModel } from '../models/clinic-params.model';
import { JsonHttpParams } from '../modules/shared/types/json-http-params';

@Injectable({
  providedIn: 'root'
})

export class ClinicsService {
  constructor(private httpClient: HttpClient) {}

  getRequestParams(doctors?: string[], name?: string, rating?: number): Partial<ClinicParamsModel> {
    const params:  Partial<ClinicParamsModel> = {};
    if (doctors) {
      params.doctors_like = doctors;
    }
    if (rating) {
      params.rating_gte = rating;
      params.rating_lte = 5;
    }
    if (name) {params.name = name; }
    return params;
  }

  getClinics(): Observable<Clinic[]> {
    return this.httpClient.get<Clinic[]>(`${environment.apiUrl}/clinics`);
  }

  getAllDoctors(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/allDoctors`);
  }

  getFilterClinic(params: Partial<ClinicParamsModel>  ): Observable<Clinic[]>{
    const url = `${environment.apiUrl}/clinics?`;
    return this.httpClient.get<Clinic[]>(url, { params: params as JsonHttpParams });
  }

  getClinicsById(clinicsId: string): Observable<Clinic> {
    const url = `${environment.apiUrl}/clinics/${clinicsId}`;
    return this.httpClient.get<Clinic>(url);
  }
}
