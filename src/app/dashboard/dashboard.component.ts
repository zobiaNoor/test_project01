import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fname:any
  lname:any
  jsonstring: any;
  constructor() { }

  ngOnInit(): void {
    this.jsonstring=JSON.parse(sessionStorage.getItem("formdata") || '{}')
    this.fname=this.jsonstring.firstName
    this.lname=this.jsonstring.lastName
  }

}
