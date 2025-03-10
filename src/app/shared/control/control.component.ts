import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control' // old way
  // @HostListener('click') onClick() {
  //   console.log('Control clicked:');
  // }
  label = input.required<string>();
  private el = inject(ElementRef)

  onClick() {
    console.log('Control clicked:', this.el);
  }
}
