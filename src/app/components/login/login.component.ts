import {Component, Input, OnInit} from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loginWith: string;
  constructor(private authService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login().then(data => data.user.providerData.forEach(veri => {
      console.log(veri);
    }))
      .catch(err => console.error(err));
  }

}
