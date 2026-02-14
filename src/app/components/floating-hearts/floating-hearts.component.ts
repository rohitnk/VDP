import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-hearts',
  templateUrl: './floating-hearts.component.html',
  styleUrls: ['./floating-hearts.component.css']
})
export class FloatingHeartsComponent implements OnInit {
  hearts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generateHearts();
  }

  generateHearts() {
    for (let i = 0; i < 20; i++) {
      this.hearts.push({
        left: Math.random() * 100 + '%',
        size: (Math.random() * 20 + 10) + 'px',
        delay: (Math.random() * 5) + 's',
        duration: (Math.random() * 5 + 5) + 's',
        opacity: Math.random() * 0.5 + 0.2,
        zIndex: Math.floor(Math.random() * 3) - 1, // -1, 0, 1
        blur: (Math.random() * 2) + 'px'
      });
    }
  }
}
