import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lab } from '../models/lab.model';
import { ClinicParamsModel } from '../models/clinic-params.model';
import { JsonHttpParams } from '../modules/shared/types/json-http-params';
import { LabParamsModel } from '../models/lab-params.model';

@Injectable({
  providedIn: 'root'
})

export class LabsService {
  constructor(private httpClient: HttpClient) {}

  getRequestParams(name?: string , tests?: string[], rating?: number): Partial<LabParamsModel> {

    const params:  Partial<LabParamsModel> = {};
    if (name) {params.name = name; }
    if (rating) {
      params.rating_gte = rating;
      params.rating_lte = 5;
    }
    if (tests) {params.tests_like = tests; }
    return params;
  }

  getLabs(): Observable<Lab[]> {
    return this.httpClient.get<Lab[]>(`${environment.apiUrl}/labs`);
  }

  getAllTests(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/allTests`);
  }

  getFilterLabs(params: Partial<ClinicParamsModel>  ): Observable<Lab[]>{
    const url = `${environment.apiUrl}/labs?`;
    return this.httpClient.get<Lab[]>(url, { params: params as JsonHttpParams });
  }

  getLabsById(labsId: string): Observable<Lab> {
    const url = `${environment.apiUrl}/labs/${labsId}`;
    return this.httpClient.get<Lab>(url);
  }
}
