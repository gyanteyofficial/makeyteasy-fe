import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-payment-success',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent {
  order = {
    course: 'YouTube Success Blueprint',
    orderId: 'order_MkY12457890',
    amount: '₹1,499',
    method: 'Razorpay',
    date: '28 May 2024, 11:30 AM'
  };
}
