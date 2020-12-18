import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private auth: AngularFireAuth) { }

  login() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginWithEmailAndPassword(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  createAnAccount(mail, password) {
    return this.auth.createUserWithEmailAndPassword(mail, password);
  }
  signOut() {
    return this.auth.signOut();
  }
}
