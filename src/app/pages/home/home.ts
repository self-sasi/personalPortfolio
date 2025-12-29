import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  activeCardId = signal<string | null>(null);
  isClosing = signal(false);
  activeStyle = signal<Record<string, string>>({});
  originRect = signal<{ top: number; left: number; width: number; height: number } | null>(null);

  openCard(id: string, element: HTMLElement, container: HTMLElement) {
    if (this.activeCardId() === id) {
      this.closeCard();
      return;
    }

    const cardRect = element.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const origin = {
      top: cardRect.top - containerRect.top,
      left: cardRect.left - containerRect.left,
      width: cardRect.width,
      height: cardRect.height,
    };

    this.originRect.set(origin);
    this.activeCardId.set(id);
    this.isClosing.set(false);
    this.activeStyle.set({
      top: `${origin.top}px`,
      left: `${origin.left}px`,
      width: `${origin.width}px`,
      height: `${origin.height}px`,
    });

    requestAnimationFrame(() => {
      this.activeStyle.set({
        top: '0px',
        left: '0px',
        width: `${containerRect.width}px`,
        height: `${window.innerHeight}px`,
      });
    });
  }

  closeCard() {
    const origin = this.originRect();
    if (!origin) {
      this.activeCardId.set(null);
      this.activeStyle.set({});
      return;
    }

    this.isClosing.set(true);
    this.activeStyle.set({
      top: `${origin.top}px`,
      left: `${origin.left}px`,
      width: `${origin.width}px`,
      height: `${origin.height}px`,
    });
  }

  onCardTransitionEnd(id: string) {
    if (!this.isClosing() || this.activeCardId() !== id) {
      return;
    }

    this.isClosing.set(false);
    this.activeCardId.set(null);
    this.activeStyle.set({});
    this.originRect.set(null);
  }
}
