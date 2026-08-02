import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

interface Course {
  id: number;
  title: string;
  description: string;
  lessons: number;
  hours: number;
  level: string;
  levelColor: string;
  rating: number;
  reviews: string;
  category: string;
  thumb: string;
}

@Component({
  selector: 'app-courses',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  activeFilter = signal('All Courses');
  searchQuery = signal('');

  filters = ['All Courses', 'YouTube Growth', 'Content Creation', 'Video Editing', 'SEO & Optimization', 'Monetization'];

  allCourses: Course[] = [
    {
      id: 1,
      title: 'YouTube for Beginners',
      description: 'Start your YouTube journey the right way. Learn the basics and set up your channel for success.',
      lessons: 18, hours: 2.5, level: 'Beginner', levelColor: 'green',
      rating: 4.8, reviews: '1.2K', category: 'YouTube Growth', thumb: 'beginner'
    },
    {
      id: 2,
      title: 'Content Creation Mastery',
      description: 'Learn how to find ideas, plan content and create engaging videos your audience loves.',
      lessons: 20, hours: 3.6, level: 'Intermediate', levelColor: 'orange',
      rating: 4.7, reviews: '980', category: 'Content Creation', thumb: 'content'
    },
    {
      id: 3,
      title: 'Video Editing with Impact',
      description: 'Master editing techniques to make your videos look professional and engaging.',
      lessons: 22, hours: 4.1, level: 'Intermediate', levelColor: 'orange',
      rating: 4.9, reviews: '1.1K', category: 'Video Editing', thumb: 'editing'
    },
    {
      id: 4,
      title: 'YouTube SEO Mastery',
      description: 'Rank higher in search and get more views with powerful SEO strategies.',
      lessons: 16, hours: 2.8, level: 'All Levels', levelColor: 'blue',
      rating: 4.8, reviews: '890', category: 'SEO & Optimization', thumb: 'seo'
    },
    {
      id: 5,
      title: 'Grow Your Channel Fast',
      description: 'Proven strategies to get more subscribers, views and grow your channel consistently.',
      lessons: 19, hours: 3.2, level: 'Intermediate', levelColor: 'orange',
      rating: 4.8, reviews: '1.3K', category: 'YouTube Growth', thumb: 'growth'
    },
    {
      id: 6,
      title: 'Monetize Your Channel',
      description: 'Learn all the ways to monetize your content and build a sustainable income.',
      lessons: 15, hours: 2.1, level: 'Intermediate', levelColor: 'orange',
      rating: 4.7, reviews: '760', category: 'Monetization', thumb: 'monetize'
    },
    {
      id: 7,
      title: 'Thumbnail Design Mastery',
      description: 'Create click-worthy thumbnails that get more clicks and boost your views.',
      lessons: 14, hours: 1.9, level: 'Beginner', levelColor: 'green',
      rating: 4.9, reviews: '1.0K', category: 'Content Creation', thumb: 'thumbnail'
    },
    {
      id: 8,
      title: 'YouTube Analytics Pro',
      description: 'Understand your analytics and make data-driven decisions to grow faster.',
      lessons: 13, hours: 1.8, level: 'All Levels', levelColor: 'blue',
      rating: 4.7, reviews: '680', category: 'SEO & Optimization', thumb: 'analytics'
    }
  ];

  get filteredCourses(): Course[] {
    const f = this.activeFilter();
    const q = this.searchQuery().toLowerCase();
    let list = f === 'All Courses' ? this.allCourses : this.allCourses.filter(c => c.category === f);
    if (q) list = list.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
    return list;
  }

  setFilter(f: string) { this.activeFilter.set(f); }
  onSearch(e: Event) { this.searchQuery.set((e.target as HTMLInputElement).value); }

  stars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i);
  }
}
