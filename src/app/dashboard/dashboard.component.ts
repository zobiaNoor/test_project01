import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 username:any
  constructor() { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('uname')
  }

}
