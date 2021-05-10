import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './modules/pharmacies/components/map/map.component';
import { CategoryPageComponent } from './modules/views/components/category-page/category-page.component';
import { PharmacyMoreInfoComponent } from './modules/pharmacies/components/pharmacy-more-info/pharmacy-more-info.component';
import { MapClinicsComponent } from './modules/clinics/components/map-clinics/map-clinics.component';
import { ClinicMoreInfoComponent } from './modules/clinics/components/clinic-more-info/clinic-more-info.component';
import { MapLabsComponent } from './modules/labs/components/map-labs/map-labs.component';
import { LabMoreInfoComponent } from './modules/labs/components/lab-more-info/lab-more-info.component';

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
