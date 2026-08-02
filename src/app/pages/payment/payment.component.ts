import { Component, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-payment',
  imports: [NavbarComponent, RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private router: Router) {}

  selectedMethod = signal('cards');
  activeTab = signal('recommended');
  showModal = signal(false);

  methods = [
    { id: 'cards', label: 'Cards', desc: 'Visa, Mastercard, RuPay' },
    { id: 'upi', label: 'UPI', desc: 'Google Pay · PhonePe · Paytm' },
    { id: 'netbanking', label: 'Netbanking', desc: 'All Indian Banks' },
    { id: 'wallet', label: 'Wallet', desc: 'Paytm, PhonePe, Amazon Pay & more' },
    { id: 'emi', label: 'EMI', desc: 'Cards, UPI & Netbanking' }
  ];

  order = { title: 'YouTube Success Blueprint', lessons: 25, hours: 4.5, subtotal: 2499, discount: 1000, total: 1499 };

  openModal() { this.showModal.set(true); }
  closeModal() { this.showModal.set(false); }

  confirmPayment() {
    this.showModal.set(false);
    this.router.navigate(['/payment-success']);
  }
}
