import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface GearItem {
  id: number;
  name: string;
  category: string;
  tag: string;
  description: string;
  linkLabel: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-gear',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './gear.component.html',
  styleUrl: './gear.component.css'
})
export class GearComponent {
  activeFilter = signal('All');

  filters = ['All', 'Cameras', 'Lenses', 'Audio', 'Lighting', 'Tripods & Support', 'Accessories', 'Editing'];

  allGear: GearItem[] = [
    {
      id: 1,
      name: 'Canon EOS R10',
      category: 'Cameras',
      tag: 'Camera',
      description: 'My go-to camera for shooting high-quality YouTube videos.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'camera'
    },
    {
      id: 2,
      name: 'Canon RF 18-55mm',
      category: 'Lenses',
      tag: 'Lens',
      description: 'Versatile kit lens for vlogging and everyday shooting.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'lens'
    },
    {
      id: 3,
      name: 'Blue Yeti USB Mic',
      category: 'Audio',
      tag: 'Audio',
      description: 'Crystal clear audio for voiceovers, tutorials and recording.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'mic'
    },
    {
      id: 4,
      name: 'Digitek 18" Ring Light',
      category: 'Lighting',
      tag: 'Lighting',
      description: 'Perfect lighting for talking head videos and live streams.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'ringlight'
    },
    {
      id: 5,
      name: 'Digitek DTR 550 LW',
      category: 'Tripods & Support',
      tag: 'Tripod',
      description: 'Sturdy and reliable tripod for stable shots.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'tripod'
    },
    {
      id: 6,
      name: 'SanDisk 128GB SSD',
      category: 'Accessories',
      tag: 'Storage',
      description: 'Fast external SSD for quick file transfers and backups.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'ssd'
    },
    {
      id: 7,
      name: 'Apple MacBook Air M2',
      category: 'Editing',
      tag: 'Editing',
      description: 'My editing machine for smooth and fast video editing.',
      linkLabel: 'View on Amazon',
      link: '#',
      image: 'macbook'
    },
    {
      id: 8,
      name: 'Adobe Premiere Pro',
      category: 'Editing',
      tag: 'Software',
      description: 'My primary editing software for professional videos.',
      linkLabel: 'View on Adobe',
      link: '#',
      image: 'premiere'
    }
  ];

  get filteredGear(): GearItem[] {
    const f = this.activeFilter();
    return f === 'All' ? this.allGear : this.allGear.filter(g => g.category === f);
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
