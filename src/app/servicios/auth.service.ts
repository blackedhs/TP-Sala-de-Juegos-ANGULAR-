import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, pass: string): Promise<auth.UserCredential> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, pass);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async registrar(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, pass);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout(): Promise<any> {
    try {
      const result = await this.afAuth.signOut();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

