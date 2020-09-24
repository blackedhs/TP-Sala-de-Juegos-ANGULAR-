import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, pass: string): Promise<auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, pass);
  }
  registrar(email: string, pass: string): Promise<firebase.auth.UserCredential> {
   return this.afAuth.createUserWithEmailAndPassword(email, pass);
  }
  logout(): Promise<any> {
    return this.afAuth.signOut();
  }
}

