import { Component } from '@angular/core';
import { AuthService } from './auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roller derby manager';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  
}
