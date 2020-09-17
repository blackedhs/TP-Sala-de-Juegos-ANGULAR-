import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {
  public registerForm = new FormGroup({
    email: new FormControl (''),
    password: new FormControl ('')
  });
  constructor(private authSvc: AuthService, private routes: Router) { }

  ngOnInit(): void {
  }
  async onSubmit(){
    const {email, password} = this.registerForm.value;
    try {
      await this.authSvc.registrar(email, password);
      this.routes.navigate(['/principal']);
    } catch (error) {
      alert(error);
    }
  }
}
