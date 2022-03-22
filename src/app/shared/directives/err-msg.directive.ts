import { Directive, 
         ElementRef, 
         Input, 
         OnInit       } from '@angular/core';

@Directive({
  selector: '[errorMsj]'
})
export class ErrMsgDirective implements OnInit{
  @Input() color  :string = 'red'
  @Input() mensaje:string = 'Este campo es requerido'
  
  htmlElement :ElementRef<HTMLElement>

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el   

   }
  ngOnInit(): void {
    this.setColor()
    this.setMsg()
  }
  
  setColor(){
    this.htmlElement.nativeElement.style.color = this.color
    this.addClass()
  }
  setMsg():void{
        
    this.htmlElement.nativeElement.innerText = this.mensaje
    
  }
  addClass(){
    this.htmlElement.nativeElement.classList.add('form-text')

  }

}
