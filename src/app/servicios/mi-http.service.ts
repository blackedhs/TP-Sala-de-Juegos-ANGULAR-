import { log } from 'util';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {

  constructor(public http: HttpClient) { }

  public httpGetP(url: string): any {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any): any {
    return this.http
      .get(url)
      .subscribe(data => {
        console.log(data);
        return data;
      });
  }

  public httpGetO(url: string): any {
    return this.http.get(url)
    .toPromise()
    .then()
    .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData(res: Response): any {
    return res.json() || {};
  }

  private handleError(error: Response | any): any {
    return error;
  }
}
