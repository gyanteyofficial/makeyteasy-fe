import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-course-detail',
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course = {
    title: 'YouTube Success Blueprint',
    description: 'A complete roadmap to start, grow and monetize a successful YouTube channel.',
    lessons: 25,
    hours: 4.5,
    level: 'Beginner to Advanced',
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.8,
    reviews: '128 students'
  };

  whatYoullLearn = [
    'Create a YouTube channel the right way',
    'Find winning video ideas',
    'Script, shoot and edit engaging videos',
    'Rank videos higher with SEO',
    'Grow your audience and get more views',
    'Monetize and build a sustainable income'
  ];

  courseIncludes = [
    { svg: 'play', text: '25 Lessons' },
    { svg: 'clock', text: '4.5 Hours' },
    { svg: 'mobile', text: 'Watch on Mobile and TV' },
    { svg: 'cert', text: 'Certificate of Completion' },
    { svg: 'users', text: 'Community Support' }
  ];

  relatedCourses = [
    { id: 4, title: 'YouTube SEO Mastery', price: 1299, originalPrice: 1999, lessons: 16, hours: 2.9, thumb: 'seo' },
    { id: 3, title: 'Video Editing with Impact', price: 1299, originalPrice: 1999, lessons: 22, hours: 4.1, thumb: 'editing' },
    { id: 7, title: 'Thumbnail Design Mastery', price: 999, originalPrice: 1499, lessons: 14, hours: 1.9, thumb: 'thumbnail' }
  ];

  stars = [1,2,3,4,5];
}
