import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Output() next = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    this.next.emit();
  }
}
