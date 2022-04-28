import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any
  password:any
 
  constructor(private router: Router) {
    
      document.body.style.backgroundColor = "aqua";


  }
   

  ngOnInit(): void {
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "";
      }
  
  onSubmit()
  {
    if(this.username.trim()==sessionStorage.getItem('uname') && this.password==sessionStorage.getItem('pname'))
    this.router.navigate(['/dashboard'])
     else   
     alert("incorrect password or username" )
     }


}

