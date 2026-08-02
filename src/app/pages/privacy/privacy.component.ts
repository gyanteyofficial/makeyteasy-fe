import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface PolicySection {
  id: number;
  title: string;
  icon: string;
  content: string;
  isOpen: boolean;
  email?: string;
}

@Component({
  selector: 'app-privacy',
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  activeSection = 1;

  sections: PolicySection[] = [
    {
      id: 1,
      title: 'Information We Collect',
      icon: 'person',
      content: 'We collect information that you provide directly to us and information that is collected automatically when you use our website or services.',
      isOpen: false
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: 'monitor',
      content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.',
      isOpen: false
    },
    {
      id: 3,
      title: 'Cookies and Tracking Technologies',
      icon: 'cookie',
      content: 'We use cookies and similar technologies to enhance your experience, analyze site traffic, and understand user behavior.',
      isOpen: false
    },
    {
      id: 4,
      title: 'Sharing Your Information',
      icon: 'share',
      content: 'We do not sell your personal information. We may share your information with trusted third parties only as described in this policy.',
      isOpen: false
    },
    {
      id: 5,
      title: 'Data Security',
      icon: 'lock',
      content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
      isOpen: false
    },
    {
      id: 6,
      title: 'Your Rights and Choices',
      icon: 'rights',
      content: 'You have the right to access, update, or delete your personal information and to opt out of marketing communications.',
      isOpen: false
    },
    {
      id: 7,
      title: 'Third-Party Links',
      icon: 'external',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.',
      isOpen: false
    },
    {
      id: 8,
      title: "Children's Privacy",
      icon: 'child',
      content: 'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children.',
      isOpen: false
    },
    {
      id: 9,
      title: 'Changes to This Policy',
      icon: 'refresh',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.',
      isOpen: false
    },
    {
      id: 10,
      title: 'Contact Us',
      icon: 'mail',
      content: 'If you have any questions or concerns about this Privacy Policy, please contact us at ',
      email: 'support@makeyteasy.com',
      isOpen: false
    }
  ];

  toggleSection(section: PolicySection) {
    section.isOpen = !section.isOpen;
  }

  scrollTo(id: number) {
    this.activeSection = id;
    const el = document.getElementById('section-' + id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
