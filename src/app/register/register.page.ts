import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /*const controller = document.querySelector('ion-alert-controller');
    let useremail, userpassword, name;

    function processForm(event) {
      event.preventDefault();
      controller.create({
        header: 'Account Created',
        message: `Created account for: <b>${name}</b>`,
        buttons: [{
          text: 'OK'
        }]
      }).then(alert => alert.present());
    }
    
    function handleEmailValue(event) {
      useremail = event.target.value;
    }

    function handleNameValue(event) {
      name = event.target.value;
    }

     function handlePasswordValue(event) {
      userpassword = event.target.value;
    }
    
    */
}
