import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EmployerComponent } from './components/employer/employer.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { JobsappliedComponent } from './components/jobsapplied/jobsapplied.component';

@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    RegistrationComponent,
    EmployerComponent,
    CandidateComponent,
    JobsappliedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
