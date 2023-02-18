import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  credentials = {
    username: '',
    password: ''
  };
  ngOnInit() {
    console.log(this.credentials);
  }

  test() {
    console.log('Should print')
    console.log(this.credentials);
    document.querySelector('form')?.classList.add('fade-out');
  }
  
}
