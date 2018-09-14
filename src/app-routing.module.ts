import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { AuthGuard } from './app/guards'; 
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { RegisterComponent } from './app/register/register.component';

 
const routes: Routes = [
   { path: '', component: AppComponent, canActivate: [AuthGuard] },
   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '**', component: PageNotFoundComponent }
   
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // { path: 'dashboard', component: DashboardComponent },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  //{ path: '', component: AppComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}