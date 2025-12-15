import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Wave } from "../components/wave/wave";

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, Wave],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})

export class Layout {

  protected readonly isSidebarOpen = signal(true);
  protected readonly waveLayers = [
    { height: 2000, color: "#1fbcff", duration: '24s', opacity: 1},
    { height: 1600, color: '#1896ff', duration: '18s', opacity: 1 },
    { height: 1200, color: '#1276e3', duration: '13s', opacity: 0.55 },
    { height: 800, color: '#0b527c', duration: '10s', opacity: 0.65 },
    { height: 400, color: '#0a4a59', duration: '8s', opacity: 0.75 },
  ];

  toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }
}
