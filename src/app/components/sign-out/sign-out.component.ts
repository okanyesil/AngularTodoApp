import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private authService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signOut() {
    this.authService.signOut().then(data => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('').then(r => r);
    }).catch(err => console.log(err));
  }

}
