import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      username =new FormControl('',[Validators.required,Validators.email])
      password =new FormControl('',[Validators.required,Validators.minLength(5)])
  jsonstring:any
  
  constructor(private router: Router) {
    
      document.body.style.backgroundColor = "aqua";


  }
   

  ngOnInit(): void {
    this.jsonstring=JSON.parse(sessionStorage.getItem("formdata") || '{}')
    
  }

  ngOnDestroy(){
    document.body.style.backgroundColor = "";
      }
  
      get user(){
   
        return this.username.get('username')
  
    }
  
    get pwd(){
     
      return this.password.get('password')
  
    }

  onSubmit()
    {
      
     if(this.username.value==this.jsonstring.username &&this.password.value==this.jsonstring.password)
    this.router.navigate(['/dashboard'])
      else 
     alert("incorrect password or username")
     }


}

