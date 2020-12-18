import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo: UserModel;
  constructor() {
  }

  ngOnInit(): void {
  }
}
