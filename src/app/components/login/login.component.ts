import {Component, Input, OnInit} from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import {UserModel} from '../../models/user.model';
import {Router} from '@angular/router';
import {LOCAL_STORAGE} from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() loginWith: string;
  constructor(private authService: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login().then(data => data.user.providerData.forEach(veri => {
      console.log(veri);
      this.router.navigateByUrl('/todo').then(r => r);
      localStorage.setItem('user', JSON.stringify(veri));
    }))
      .catch(err => console.error(err));
  }

}
