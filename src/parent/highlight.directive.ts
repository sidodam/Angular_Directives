import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('mouseenter')
  mouseover() {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerText',
      this.elementRef.nativeElement.innerText.toUpperCase()
    );
  }

  @HostListener('mouseleave') mouseover2() {
    this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', 'link1');
  }
}
