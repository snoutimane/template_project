import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component'; // Import your LoginComponent
import { SearchCandidatesComponent } from './search-candidates/search-candidates.component';
import { SignupComponent } from './signup/signup.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'search',component: SearchCandidatesComponent,canActivate:[AuthGuard]},
  {path: 'add',component: AddCandidateComponent,canActivate:[AuthGuard]},
  {path: 'view',component: ViewCandidateComponent,canActivate:[AuthGuard]},
  
  // Add other routes here for your application's other pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
