import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsj]'
})
export class ErrMsgDirective implements OnInit{

  constructor() {
    console.log('cost directive');
    
   }
  ngOnInit(): void {
    console.log('oninit directive');
    
  }

}
