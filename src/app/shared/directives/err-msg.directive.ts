import { Directive, 
         ElementRef, 
         Input, 
         OnInit       } from '@angular/core';

@Directive({
  selector: '[errorMsj]'
})
export class ErrMsgDirective implements OnInit{
  @Input() color :string='red'
  
  htmlElement :ElementRef<HTMLElement>

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el   

   }
  ngOnInit(): void {
    console.log('oninit directive');
    this.setColor()
    
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this.color
  }

}
