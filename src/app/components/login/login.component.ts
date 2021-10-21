import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   public loginInvalid = false;
  public loginPassInvalid=false;
  public loginNameInvalid=false;
  
  constructor(
  ) {
  }
  ngOnInit(): void {
  }

  onSubmit(event: any) {
  let username=  event.target.userName.value
  this.loginNameInvalid= username!='LIAV' && username.length >3
 }

 onSearchChange(searchValue: string): void {  
  console.log(searchValue);
}

 onClick() {
    this.loginInvalid = false;
    this.loginNameInvalid = false;
    this.loginPassInvalid = false;

      try {
       
        //this.loginNameInvalid= username!='LIAV' && username.length >3
       // this.loginPassInvalid= username!='1234' && username.length >3
      } catch (err) {
        this.loginInvalid = true;
      }
  
  }
}
