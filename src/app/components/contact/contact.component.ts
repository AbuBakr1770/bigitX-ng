import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup

  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
   }

  onSubmit(){
    // console.log(this.contactForm.value);
    this.http.post('http://localhost:5000/sendmail', this.contactForm.value).subscribe(data=>{
      console.log(data);
    })
    this.contactForm.reset()

  }

  ngOnInit(): void {
  }

}
