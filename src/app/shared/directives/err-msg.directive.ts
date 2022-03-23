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
  private _valido:boolean=true

  
  // se declara un setter para manjear el cambio de color 
  @Input() set color(valor:string){
    this._color = valor 
    this.setColor()
  }

  @Input() set mensaje(valor:string){
    this._mensaje = valor
    this.setMsg()
  }
  
  @Input() set valido(valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hiden')
    }else{
      this.htmlElement.nativeElement.classList.remove('hiden')
    }
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
