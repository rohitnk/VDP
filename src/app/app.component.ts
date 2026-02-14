import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proposal-app';
  currentSection = 'home';

  navigateTo(section: string) {
    this.currentSection = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
