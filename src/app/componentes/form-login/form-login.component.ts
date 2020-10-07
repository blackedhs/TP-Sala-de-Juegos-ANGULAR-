
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { firestore, User } from 'firebase';
import { AuthService } from 'src/app/servicios/auth.service';
import { FiredbService } from 'src/app/servicios/firedb.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private route: Router, private authSvc: AuthService, public db: FiredbService) { }

  ngOnInit(): void {
    this.db.getdb('log');
  }
  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password)
      .then(() => {
        const log = {
          email: email,
          password: password,
          time: new Date().toString()
        }
        this.db.setdb(log);
        this.route.navigate(['/principal']);
      })
      .catch(() => alert('Usuario o Contraseña incorrecta')
      );
  }
  cargaUsuario(): void {
    this.loginForm.setValue({
      email: 'prueba@prueba.com',
      password: '123456'
    });
  }
}
