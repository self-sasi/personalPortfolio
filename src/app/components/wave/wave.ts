import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave',
  imports: [],
  templateUrl: './wave.html',
  styleUrl: './wave.css',
})

export class Wave {
  @Input() color: string = '#ffcf98';
  @Input() height: number | string = 160;
  @Input() animationDuration: string | number = '9s';

  get heightValue(): string {
    return typeof this.height === 'number' ? `${this.height}px` : this.height;
  }

  get durationValue(): string {
    return typeof this.animationDuration === 'number'
      ? `${this.animationDuration}s`
      : this.animationDuration;
  }
}
