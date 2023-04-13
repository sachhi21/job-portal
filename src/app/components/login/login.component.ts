import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginData: any = {};

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.loginData).subscribe((response) => {
      console.log(response);
    });
  }
}
