import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
// directia personalizaa
import { ErrMsgDirective } from './directives/err-msg.directive';



@NgModule({
  declarations: [
    ErrMsgDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrMsgDirective
  ]
})
export class SharedModule { }
