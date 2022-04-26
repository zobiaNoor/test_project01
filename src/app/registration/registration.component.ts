import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    username: any
    password: any
    firstName:any
    lastName:any
  constructor(private router: Router) {}
   

  ngOnInit(): void {
    
  }
  
  onSubmit()
  {
  
   sessionStorage.setItem('uname',this.username.trim() ) 
   sessionStorage.setItem('pname', this.password)
   sessionStorage.setItem('fname',this.firstName.trim()) 
   sessionStorage.setItem('lname',this.lastName.trim())
   
    this.router.navigate(['/login'])

  }

}
