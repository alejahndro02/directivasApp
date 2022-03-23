import { Directive, 
         ElementRef, 
         Input, 
         OnInit     } from '@angular/core';

@Directive({
  selector: '[errorMsj]'
})
export class ErrMsgDirective implements OnInit{
  htmlElement :ElementRef<HTMLElement>
  private _color:string='red'
  private _mensaje:string='Este campo es Requerido'
  // se declara un setter para manjear el cambio de color 
  @Input() set color(valor:string){
    this._color = valor 
    this.setColor()
  }

  @Input() set mensaje(valor:string){
    this._mensaje = valor
    this.setMsg()
  }
  

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el   

   }


  ngOnInit(): void {
    this.addClass()
    this.setColor()
    this.setMsg()

  }
  
  setColor(){
    this.htmlElement.nativeElement.style.color = this._color
    this.addClass()
  }
  setMsg():void{
    this.htmlElement.nativeElement.innerText = this._mensaje
  }
  addClass(){
    this.htmlElement.nativeElement.classList.add('form-text')
  }

}
