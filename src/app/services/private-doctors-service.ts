import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrivateDoctor } from '../models/private-doctors.model';

@Injectable({
  providedIn: 'root'
})
export class PrivateDoctorsService {

  constructor(private httpClient: HttpClient) {}

  getPrivateDoctors(): Observable<PrivateDoctor[]> {
    return this.httpClient.get<PrivateDoctor[]>(`${environment.apiUrl}/private-doctors`);
  }

  getPrivateDoctorsById(doctorId: string): Observable<PrivateDoctor> {
    const url = `${environment.apiUrl}/private-doctors/${doctorId}`;
    return this.httpClient.get<PrivateDoctor>(url);
  }
}
