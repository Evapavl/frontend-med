import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pharmacy } from '../models/pharmacy.model';
import { PharmParamsModel } from '../models/pharm-options.model';
import { JsonHttpParams } from '../shared/types/json-http-params';

@Injectable({
  providedIn: 'root'
})

export class PharmacyService {

  constructor(private httpClient: HttpClient) {}

  getRequestParams(name?: string[] , isWork?: boolean, rating?: number): Partial<PharmParamsModel> {

    const params:  Partial<PharmParamsModel> = {};
    if (name) {params.name = name; }
    if (rating) {
      params.rating_gte = rating;
      params.rating_lte = 5;
    }
    if (isWork) {params.isWork = isWork; }
    return params;
  }

  getPharmacies(): Observable<Pharmacy[]> {
    return this.httpClient.get<Pharmacy[]>(`${environment.apiUrl}/pharmacies`);
  }

  getPharmacyById(pharmacyId: string): Observable<Pharmacy> {
    const url = `${environment.apiUrl}/pharmacies/${pharmacyId}`;
    return this.httpClient.get<Pharmacy>(url);
  }

  getFilterPharmacy(params: Partial<PharmParamsModel>  ): Observable<Pharmacy[]>{
    const url = `${environment.apiUrl}/pharmacies?`;
    return this.httpClient.get<Pharmacy[]>(url, { params: params as JsonHttpParams });
  }

}
