import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from '../app-routing.module';
import { AlertComponent } from './directive/alert/alert.component';

import { fakeBackendProvider } from './helper';

import { AuthGuard } from './guards';
import { JwtInterceptor, ErrorInterceptor } from './helper';
import { AlertService } from './service/alert.service';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    PageNotFoundComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
	HttpModule,
	HttpClientModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,  
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		],
  bootstrap: [AppComponent]
})
export class AppModule { }
