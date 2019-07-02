import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { ProfileEditComponent } from './profileEdit/profileEdit.component';
import { EntityProfileComponent } from './profileEntity/profile.component';
import { EntityProfileEditComponent } from './profileEditEntity/profileEdit.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'edit/:id', component: ProfileEditComponent, canActivate: [AuthGuardService] },
  {path: 'profileEnt', component: EntityProfileComponent},
  { path: 'editEnt/:id', component: EntityProfileEditComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
