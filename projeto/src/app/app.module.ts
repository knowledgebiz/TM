import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProfileEditComponent } from './profileEdit/profileEdit.component';
import { DepartmentService } from './departments/Department.service';
import { expService } from './experience-levels/exp-service.service';
import { ExperienceLevelsComponent } from './experience-levels/experience-levels.component';
import { PositionsComponent } from './positions/positions.component';
import { TypeComponent } from './type/type.component';
import { TypeService } from './type/type-service.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    DepartmentsComponent,
    ExperienceLevelsComponent,
    PositionsComponent,
    TypeComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [AuthenticationService, AuthGuardService, DepartmentService, expService,
  TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
