import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchCandidatesComponent } from './search-candidates/search-candidates.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptorService } from './auth-http-interceptor.service';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SearchCandidatesComponent,
    AddCandidateComponent,
    ViewCandidateComponent,
    SignupComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [DatePipe,AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }