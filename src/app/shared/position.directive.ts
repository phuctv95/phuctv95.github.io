import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPosition]'
})
export class PositionDirective implements OnInit {

  @Input() positionLeft: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.style.left = this.positionLeft;
  }

}
