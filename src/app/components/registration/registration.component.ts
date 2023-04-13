import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registerData: any = {};

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register(this.registerData).subscribe((response) => {
      console.log(response);
    });
  }
}
