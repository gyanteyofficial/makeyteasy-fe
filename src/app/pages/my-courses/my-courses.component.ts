import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface MyCourse {
  id: number;
  title: string;
  lessons: number;
  hours: number;
  progress: number;
  thumb: string;
  started: boolean;
}

@Component({
  selector: 'app-my-courses',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {
  activeTab = signal('all');

  allCourses: MyCourse[] = [
    { id: 1, title: 'YouTube Success Blueprint', lessons: 25, hours: 4.5, progress: 12, thumb: 'blueprint', started: true },
    { id: 4, title: 'YouTube SEO Mastery', lessons: 16, hours: 2.9, progress: 0, thumb: 'seo', started: false },
    { id: 7, title: 'Thumbnail Design Mastery', lessons: 14, hours: 1.9, progress: 0, thumb: 'thumbnail', started: false }
  ];

  get filtered(): MyCourse[] {
    if (this.activeTab() === 'completed') return this.allCourses.filter(c => c.progress === 100);
    return this.allCourses;
  }

  setTab(t: string) { this.activeTab.set(t); }
}
