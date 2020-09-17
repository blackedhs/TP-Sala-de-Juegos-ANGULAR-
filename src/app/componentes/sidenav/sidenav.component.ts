import { Component, EventEmitter, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public user$: Observable<User> = this.authSvc.afAuth.user;
  private mediaMarcher: MediaQueryList = matchMedia('(max-width:720px)');
  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isloged();
  }
  async onLogout(): Promise<any> {
    await this.authSvc.logout();
    this.router.navigate(['/login']);
  }

  pantallaSmall(): boolean {
    const data = this.mediaMarcher.matches;
    return data;
  }

  isloged(): void {
    this.authSvc.afAuth.currentUser
      .then(data => {
        if (data == null) {
          this.router.navigate(['/login']);
        }
      });
  }
}
