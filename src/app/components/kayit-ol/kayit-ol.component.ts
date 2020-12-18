import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kayit-ol',
  templateUrl: './kayit-ol.component.html',
  styleUrls: ['./kayit-ol.component.css']
})
export class KayitOlComponent implements OnInit {

  constructor(private firebaseAuth: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  kayitOl(mail, password) {
    this.firebaseAuth.createAnAccount(mail, password)
      .then(data => {
        this.router.navigateByUrl('/todo');
      }).catch(err => console.log(err));
  }

}
