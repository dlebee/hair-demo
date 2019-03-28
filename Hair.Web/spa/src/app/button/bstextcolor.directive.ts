import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[bsTextColor]'
})
export class BstextcolorDirective  {
  

  @Input() bsTextColor: string;

  constructor(private el: ElementRef) {     
  }

  ngOnInit() {
    this.el.nativeElement.classList.add('text-' + this.bsTextColor);
  }
}
