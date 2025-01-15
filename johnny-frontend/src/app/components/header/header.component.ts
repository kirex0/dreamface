import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = signal('Home Page');
// Constructor that listens for changes in the url
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.updateTitle(event.url);
      }
    });
  }
// Updates the title of the page based on the url
  private updateTitle(url: string) {
    if (url === '/') {
      this.title.set('Johnny Robot List');
    } else {
      this.title.set('Back To Home Page');
    }
  }
}
