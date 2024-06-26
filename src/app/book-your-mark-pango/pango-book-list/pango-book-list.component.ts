import { Component } from '@angular/core';

@Component({
  selector: 'app-pango-book-list',
  templateUrl: './pango-book-list.component.html',
  styleUrls: ['./pango-book-list.component.css']
})
export class PangoBookListComponent {
  submitForm(registerForm:any){
    console.log(registerForm)
    console.log(this.form)
  }

  form={
    name:'',
    email:'',
    phone_no:'',
    message:'',
  }
}
