import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
    registrationForm=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')])
    })
  constructor(private router: Router) {}
   

  ngOnInit(): void {
    
  }

  get username(){
   
      return this.registrationForm.get('username')

  }

  get password(){
   
    return this.registrationForm.get('password')

  }

  get firstName(){
   
    return this.registrationForm.get('firstName')

  }

  get lastName(){
   
    return this.registrationForm.get('lastName')

  }

  
  onSubmit()
  {
  
   sessionStorage.setItem('formdata',JSON.stringify(this.registrationForm.value) )
   
    this.router.navigate(['/login'])

  }

}
