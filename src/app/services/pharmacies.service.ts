import { Injectable } from '@angular/core';
import { Pharmacy } from '../models/pharmacy.model';
import pharmacies from './../../../api/_db.json';

@Injectable({
  providedIn: 'root'
})

export class PharmacyService {

  getPharmacies(): Pharmacy[] {
    // return this.httpClient.get<Pharmacy[]>(pharmacies).pipe(
    //   map(( data ) => data)
    // );
    return pharmacies as Pharmacy[];
  }
}


