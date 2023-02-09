import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/models/subscription';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})
export class SubscriptionFormComponent implements OnInit {
  isEmailExist: boolean = false;
  isSubscribed: boolean = false;

  constructor(private subService: SubscribersService) {}

  ngOnInit(): void {}

  onSubmit(formValue: any) {
    const subsData: Subscription = {
      name: formValue.name,
      email: formValue.email,
    };
    this.subService.checkEmail(subsData.email).subscribe((val) => {
      if (val.empty) {
        this.subService.addSubs(subsData);
        this.isSubscribed = true;
      } else {
        this.isEmailExist = true;
      }
    });
  }
}
