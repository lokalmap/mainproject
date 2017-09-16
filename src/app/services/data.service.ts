import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected...')
  }

urlget(urlvar:string){
  console.log("Test Get urlvar: " + urlvar);
  return this.http.get(urlvar)
  .map(res => res.json());
}
urlPost(urlvar:string,jsonobj:any,headers:any){
  console.log("Test Post urlvar: " + urlvar);
  return this.http.post(urlvar,JSON.stringify(jsonobj),headers)
  .map(res => res.json());
}

}
