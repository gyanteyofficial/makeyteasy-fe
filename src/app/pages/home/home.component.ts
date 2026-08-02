import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  videos = [
    {
      id: 1,
      title: '5 Tools That Save Me Hours in Video Editing',
      duration: '10:24',
      views: '1.2K views',
      timeAgo: '3 days ago',
      thumbLabel: '5 TOOLS THAT SAVED ME HOURS!',
      thumbStyle: 'tools'
    },
    {
      id: 2,
      title: 'How to Write Scripts That Keep Viewers Watching',
      duration: '8:15',
      views: '2.3K views',
      timeAgo: '1 week ago',
      thumbLabel: 'SCRIPT THAT KEEPS VIEWERS HOOKED',
      thumbStyle: 'script'
    },
    {
      id: 3,
      title: 'YouTube SEO: Rank Higher & Get More Views',
      duration: '12:38',
      views: '3.6K views',
      timeAgo: '2 weeks ago',
      thumbLabel: 'YOUTUBE SEO FULL GUIDE',
      thumbStyle: 'seo'
    },
    {
      id: 4,
      title: 'Thumbnail Design Tips That Get More Clicks',
      duration: '7:45',
      views: '1.8K views',
      timeAgo: '3 weeks ago',
      thumbLabel: 'THUMBNAIL DESIGN TIPS',
      thumbStyle: 'thumbnail'
    },
    {
      id: 5,
      title: 'Video Editing Tips to Edit Faster & Better',
      duration: '9:31',
      views: '2K views',
      timeAgo: '1 month ago',
      thumbLabel: 'EDIT FASTER EDIT SMARTER',
      thumbStyle: 'edit'
    },
    {
      id: 6,
      title: 'Best Budget Filming Setup for YouTubers',
      duration: '11:02',
      views: '2.7K views',
      timeAgo: '1 month ago',
      thumbLabel: 'FILMING SETUP ON A BUDGET',
      thumbStyle: 'filming'
    },
    {
      id: 7,
      title: 'How I Grew My YouTube Channel from 0 to 10K',
      duration: '13:21',
      views: '4.1K views',
      timeAgo: '1 month ago',
      thumbLabel: 'GROW YOUR CHANNEL FROM 0 TO 10K',
      thumbStyle: 'grow'
    },
    {
      id: 8,
      title: 'YouTube Analytics Explained in Simple Words',
      duration: '9:16',
      views: '1.6K views',
      timeAgo: '2 months ago',
      thumbLabel: 'YOUTUBE ANALYTICS EXPLAINED',
      thumbStyle: 'analytics'
    }
  ];
}
