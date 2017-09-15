import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofComponent } from '../userprof/userprof.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
export const routes: Routes = [
  {path: 'login', component: LoginComponent, children: [

  ]},
]

@Component({
  selector: 'app-partials',
  templateUrl: './partials.component.html',
  styleUrls: ['./partials.component.scss']
})
export class PartialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
