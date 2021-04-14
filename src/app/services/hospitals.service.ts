import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hospital } from '../models/hospitals.model';

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
}
