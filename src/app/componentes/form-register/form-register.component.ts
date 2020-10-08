import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { FiredbService } from 'src/app/servicios/firedb.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  public registerForm = new FormGroup({
    nombre:new FormControl(''), 
    apellido: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private authSvc: AuthService, private routes: Router, public db:FiredbService) { }

  ngOnInit(): void {
    this.db.getdb('users');
  }
  onSubmit(): void {
    const { email, password, nombre, apellido} = this.registerForm.value;
    this.authSvc.registrar(email, password)
      .then(() => {
        this.db.setdb({
          nombre: nombre,
          apellido: apellido,
          email: email
        })
        this.routes.navigate(['/principal']);

      })
      .catch(() => alert('Error en el registro'));
  }
}
