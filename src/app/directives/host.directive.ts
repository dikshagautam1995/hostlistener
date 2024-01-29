import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(private ele: ElementRef) {}

  @HostListener('click',['$event.target'])onClick(el: any){
    this.ele.nativeElement.style.backgroundColor = 'beige';
  }
  @HostListener('window:scroll', [])onWindowScroll() {
    this.ele.nativeElement.style.backgroundColor = 'aquamarine';
}

}
