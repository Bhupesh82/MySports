import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
//import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent }      from './heroes/heroes.component';
//import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
 
const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: '', component: AppComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}