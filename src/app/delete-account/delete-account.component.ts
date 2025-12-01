import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  email: string = '';
  message: string = '';
  constructor(private service: ApiServiceService) { }

  deleteAccount() {
    let formData = new URLSearchParams();
    formData.set('email', this.email);

    this.service.postAPI('delete_user_by_mail', formData).subscribe((res: any) => {
      if (res.success) {
        this.email = '';
        this.message = res.message
        setTimeout(() => {
          this.message = '';
        }, 2000);
      }
    })
  }
}
