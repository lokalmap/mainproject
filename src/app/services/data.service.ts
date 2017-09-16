import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected...')
  }

getPost(){
  return this.http.get('http://192.168.1.1:3000/api/lokals?access_token=OlCEZn8zE9Sb5ZgB4T7AwWTloaiuAs7iSnnllpRs05Z3znpVFBEH8XSSVOM6yprn')
  .map(res => res.json());
}
urlPost(urlvar:string,jsonobj:any,headers:any){
  console.log("Test urlvar: " + urlvar);
  console.log("Test jsonobj: " + jsonobj);
  console.log("Test headers: " + headers);
  return this.http.post(urlvar,JSON.stringify(jsonobj),headers)
  .map(res => res.json());
}

}
