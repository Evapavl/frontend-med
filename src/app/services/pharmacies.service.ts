import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pharmacy } from '../models/pharmacy.model';

@Injectable({
  providedIn: 'root'
})

export class PharmacyService {

  url = 'http://127.0.0.1:5500/api/_db.json';

  constructor(private httpClient: HttpClient) {}

  getPharmacies(): Observable<Pharmacy[]> {
    return this.httpClient.get<Pharmacy[]>(this.url).pipe(
      map(( data ) => data)
    );
  }
}
