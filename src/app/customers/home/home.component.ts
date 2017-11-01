import { Component, OnInit } from '@angular/core';
//import { DataService } from '../../services/data.service';
//import { Http } from '@angular/http';
import { HttpClient, HttpParams , HttpHeaders } from '@angular/common/http';
import { Post } from '../../services/post';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<any>;
  newPost: Observable<any>;
  readonly  Rootkk = 'https://jsonplaceholder.typicode.com';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //console.log(this.dataSrv.urlget('localhost'));

  }
  getPost(uidt){
      console.log('test button clicked' + uidt);
      let params = new HttpParams().set('userId',uidt);
//      this.posts = this.http.get(this.Rootkk + '/posts',{params});
//      this.posts = this.http.get('http://192.168.1.1:3000/api/test');
      console.log(this.posts);
  }
  sendPost(){
      console.log('test button clicked');
       let headers = new HttpHeaders().set('Authorization','auth-token');
      this.posts = this.http.get(this.Rootkk + '/posts',{headers});
      console.log(this.posts);
  }
  createPost(){
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My sample new post',
      body: 'Hello World!!'
    }
    this.newPost = this.http.post(this.Rootkk + '/posts', data)
    //.map(post => post.title)

/*
    this.newPost = this.http.post(this.Rootkk + '/nourltest', data)
    .retry(3)
    .catch(err => {
      console.log(err)
      return Observable.of(err)
    })
    */
  }

}
