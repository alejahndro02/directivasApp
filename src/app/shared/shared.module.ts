import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { CustomIfDirective } from './directives/custom-if.directive';
// directia personaliza
import { ErrMsgDirective   } from './directives/err-msg.directive';
 


@NgModule({
  declarations: [
    ErrMsgDirective,
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrMsgDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
