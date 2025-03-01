import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Email } from '../../../models/Email';
import { EmailService } from '../../../services/email.service';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private emailService: EmailService){}
  loading = false;
  emailSent: boolean = false;
  emailNotSent: boolean = false;
  email = new Email();

  create(){
    this.loading = true;
    this.emailService.create(this.email)
    .subscribe(response => {
      this.email = new Email();

      this.emailSent = true;
      this.emailNotSent = false;
     
      this.loading = false;
    },
    error =>{
      console.log(error)
      this.emailNotSent = true;
      this.emailSent = false;
      this.loading = false;
    });
}
}
