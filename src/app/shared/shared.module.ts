import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { MostrarSiDirective } from './directives/mostrar-si.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective,
    MostrarSiDirective
  ],
  imports: [
    CommonModule
  ],
  // Exportar los elementos a compartir en otros módulos
  exports: [
    ErrorMsgDirective,
    MostrarSiDirective,
  ]
})
export class SharedModule { }
