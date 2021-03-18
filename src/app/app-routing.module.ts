import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './views/category-page/category-page.component';

const routes: Routes = [
  { path: '', component: CategoryPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
