
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AuthService } from 'src/app/servicios/auth.service';

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
  constructor(private route: Router, private authSvc: AuthService) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    const { email, password } = this.loginForm.value;
    try {
      await this.authSvc.login(email, password);
      this.route.navigate(['/principal']);
    } catch (error) {
      alert(error);
    }
  }

}
