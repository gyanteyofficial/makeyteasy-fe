import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  videos = [
    {
      id: 1,
      title: '5 Tools That Save Me Hours in Video Editing',
      duration: '10:24',
      views: '1.2K views',
      timeAgo: '3 days ago',
      thumbLabel: '5 TOOLS THAT SAVED ME HOURS!',
      thumbBg: '#1a1a2e',
      thumbAccent: '#e74c3c',
      thumbStyle: 'tools'
    },
    {
      id: 2,
      title: 'How to Write Scripts That Keep Viewers Watching',
      duration: '8:15',
      views: '2.3K views',
      timeAgo: '1 week ago',
      thumbLabel: 'SCRIPT THAT KEEPS VIEWERS HOOKED',
      thumbBg: '#16213e',
      thumbAccent: '#f39c12',
      thumbStyle: 'script'
    },
    {
      id: 3,
      title: 'YouTube SEO: Rank Higher & Get More Views',
      duration: '12:38',
      views: '3.6K views',
      timeAgo: '2 weeks ago',
      thumbLabel: 'YOUTUBE SEO FULL GUIDE',
      thumbBg: '#0f3460',
      thumbAccent: '#e74c3c',
      thumbStyle: 'seo'
    },
    {
      id: 4,
      title: 'Thumbnail Design Tips That Get More Clicks',
      duration: '7:45',
      views: '1.8K views',
      timeAgo: '3 weeks ago',
      thumbLabel: 'THUMBNAIL DESIGN TIPS',
      thumbBg: '#1a1a2e',
      thumbAccent: '#9b59b6',
      thumbStyle: 'thumbnail'
    },
    {
      id: 5,
      title: 'Video Editing Tips to Edit Faster & Better',
      duration: '9:31',
      views: '2K views',
      timeAgo: '1 month ago',
      thumbLabel: 'EDIT FASTER EDIT SMARTER',
      thumbBg: '#0d0d0d',
      thumbAccent: '#e74c3c',
      thumbStyle: 'edit'
    },
    {
      id: 6,
      title: 'Best Budget Filming Setup for YouTubers',
      duration: '11:02',
      views: '2.7K views',
      timeAgo: '1 month ago',
      thumbLabel: 'FILMING SETUP ON A BUDGET',
      thumbBg: '#1a1a2e',
      thumbAccent: '#f1c40f',
      thumbStyle: 'filming'
    },
    {
      id: 7,
      title: 'How I Grew My YouTube Channel from 0 to 10K',
      duration: '13:21',
      views: '4.1K views',
      timeAgo: '1 month ago',
      thumbLabel: 'GROW YOUR CHANNEL FROM 0 TO 10K',
      thumbBg: '#c0392b',
      thumbAccent: '#f1c40f',
      thumbStyle: 'grow'
    },
    {
      id: 8,
      title: 'YouTube Analytics Explained in Simple Words',
      duration: '9:16',
      views: '1.6K views',
      timeAgo: '2 months ago',
      thumbLabel: 'YOUTUBE ANALYTICS EXPLAINED',
      thumbBg: '#0d0d0d',
      thumbAccent: '#e74c3c',
      thumbStyle: 'analytics'
    }
  ];
}
