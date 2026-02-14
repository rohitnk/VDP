import { Component, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {
  isYesClicked = false;
  noButtonStyle: any = {};
  noAttempts = 0;
  isNoDisabled = false;
  noButtonText = 'No';

  constructor() { }

  ngOnInit(): void {
  }

  moveNoButton() {
    if (this.isNoDisabled) return;

    this.noAttempts++;

    if (this.noAttempts > 5) {
      this.isNoDisabled = true;
      this.noButtonText = 'No (Disabled)';
      return;
    }

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    this.noButtonStyle = {
      position: 'fixed',
      left: `${x}px`,
      top: `${y}px`,
      transition: 'all 0.1s ease'
    };
  }

  onNoClick() {
    if (this.noAttempts > 5) {
      alert("Rinku, this button is officially broken! Only 'Yes' works now. ❤️");
    } else {
      this.moveNoButton();
    }
  }

  onYes() {
    this.isYesClicked = true;
    this.triggerConfetti();
  }

  triggerConfetti() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  }
}
