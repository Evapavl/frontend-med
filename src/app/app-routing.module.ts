import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './components/map/map.component';
import { CategoryPageComponent } from './views/category-page/category-page.component';
import { PharmacyMoreInfoComponent } from './components/pharmacy-more-info/pharmacy-more-info.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalMoreInfoComponent } from './components/hospital-more-info/hospital-more-info.component';
import { MapClinicsComponent } from './components/map-clinics/map-clinics.component';
import { ClinicMoreInfoComponent } from './components/clinic-more-info/clinic-more-info.component';
import { MapLabsComponent } from './components/map-labs/map-labs.component';
import { LabMoreInfoComponent } from './components/lab-more-info/lab-more-info.component';

const routes: Routes = [
  { path: '', component: CategoryPageComponent },
  {
    path: 'pharmacies',
    children: [
      { path: '', component: MapComponent},
      { path: ':id', component:  PharmacyMoreInfoComponent},
    ]
  },
  {
    path: 'hospitals',
    children: [
      { path: '', component: HospitalsComponent },
      { path: ':id', component: HospitalMoreInfoComponent }
    ],
  },
  {
    path: 'clinics',
    children: [
      { path: '', component: MapClinicsComponent},
      { path: ':id', component:  ClinicMoreInfoComponent},
    ]
  },
  {
    path: 'labs',
    children: [
      { path: '', component: MapLabsComponent},
      { path: ':id', component:  LabMoreInfoComponent},
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
