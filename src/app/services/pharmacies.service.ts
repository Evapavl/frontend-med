import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacy } from '../models/pharmacy.model';

@Injectable({
  providedIn: 'root'
})

export class PharmacyService {
  constructor(private httpClient: HttpClient) {}

  getPharmacies(): Observable<Pharmacy[]> {
    return this.httpClient.get<Pharmacy[]>(`${environment.apiUrl}/pharmacies`);
  }

  getPharmacyById(pharmacyId: string): Observable<Pharmacy> {
    const url = `${environment.apiUrl}/pharmacies/${pharmacyId}`;
    return this.httpClient.get<Pharmacy>(url);
  }
}
