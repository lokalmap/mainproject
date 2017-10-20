import { Component, OnInit } from '@angular/core';
//import { DataService } from '../../services/data.service';
//import { Http } from '@angular/http';
import { HttpClient, HttpParams , HttpHeaders } from '@angular/common/http';
import { Post } from '../../services/post';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<any>;
  readonly  Rootkk = 'https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //console.log(this.dataSrv.urlget('localhost'));

  }
  getPost(){
      console.log('test button clicked');
      let params = new HttpParams().set('userId','2');
      this.posts = this.http.get(this.Rootkk + '/posts',{params});
      console.log(this.posts);
  }
  sendPost(){
      console.log('test button clicked');
       let headers = new HttpHeaders().set('Authorization','auth-token');
      this.posts = this.http.get(this.Rootkk + '/posts',{headers});
      console.log(this.posts);
  }

}
