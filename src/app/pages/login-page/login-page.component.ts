import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private firebaseAuth: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  girisYap(mail, password) {
    this.firebaseAuth.loginWithEmailAndPassword(mail, password)
      .then(data => {
          this.router.navigateByUrl('/todo').then(t => t).catch(err => console.log(err));
      }).catch(err => console.log(err));
  }

}
