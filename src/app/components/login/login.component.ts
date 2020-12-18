import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login().then(data => data.user.providerData.forEach(veri => {
      console.log(veri.displayName);
    }))
      .catch(err => console.error(err));
  }

}
