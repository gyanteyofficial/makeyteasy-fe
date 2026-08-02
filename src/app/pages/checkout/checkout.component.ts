import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-checkout',
  imports: [NavbarComponent, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  coupon = signal('');
  couponApplied = signal(false);
  couponError = signal('');

  form = {
    fullName: '',
    email: '',
    phone: '',
    country: 'India'
  };

  order = {
    title: 'YouTube Success Blueprint',
    lessons: 25,
    hours: 4.5,
    price: 1499,
    originalPrice: 2499,
    discount: 1000
  };

  get total() { return this.order.originalPrice - this.order.discount; }

  applyCoupon() {
    if (this.coupon().toUpperCase() === 'SAVE10') {
      this.couponApplied.set(true);
      this.couponError.set('');
    } else {
      this.couponError.set('Invalid coupon code.');
    }
  }

  countries = ['India','United States','United Kingdom','Canada','Australia','Singapore','UAE','Germany','France','Other'];
}
