import { Component, OnInit } from '@angular/core';
//import { DataService } from '../../services/data.service';
import { Http } from '@angular/http';
//import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  readonly  Rootkk = 'https://jsonplaceholder.typicode.com';
  constructor(private http:Http) { }

  ngOnInit() {
    //console.log(this.dataSrv.urlget('localhost'));

  }
  getPost(){
      console.log('test button clicked');
      //let params = new HttpParams();
      this.posts = this.http.get(this.Rootkk + '/posts').map(res => res.json());
      console.log(this.posts);
  }

}
