import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredName : string;

  public register(){
    console.log("this is maybe working???")
    console.log(this.registeredName)
  }

  constructor() { }

  ngOnInit() {
  }

}
