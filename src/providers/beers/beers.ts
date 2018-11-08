import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the BeersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BeersProvider {

  beers: any[];

  constructor(public http: HttpClient) {
    console.log('Hello BeersProvider Provider');
  }

  getBeers(){
    const value = this.beers
      ? Promise.resolve(this.beers).then(beers => beers)
      : this.http.get('https://api.punkapi.com/v2/beers').toPromise();
    console.log(value);
    return value;
  }

}
