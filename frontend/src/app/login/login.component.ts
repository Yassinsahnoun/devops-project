import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData = {
    password: '',
  }

  constructor(private router:Router){
  }
  ngOnInit(): void {}
  
  public formSubmit(){
    if(this.loginData.password=="enicarthageadmin"){
      this.router.navigate(['/pageadmin']);
    }
    if(this.loginData.password=="enicarthageprof"){
      this.router.navigate(['/pageprof']);
    }
    if(this.loginData.password=="enicarthageetud"){
      this.router.navigate(['/pageetud']);
    }
  }
  goToPage(){
    this.router.navigate(['/home']);
  }
}
