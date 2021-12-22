import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  imports: [
    CommonModule
  ],
  // Exportar los elementos a compartir en otros módulos
  exports: [
    ErrorMsgDirective
  ]
})
export class SharedModule { }
