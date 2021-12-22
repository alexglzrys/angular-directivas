import { Directive, OnInit } from '@angular/core';

@Directive({
  // El selector que usaremos para invocar esta directiva
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  /**
  * Las directivas en parte también son afectadas por el ciclo de vida de Angular
  */

  constructor() {
    console.log('Constructor - Diectiva')
  }

  ngOnInit(): void {
      console.log('ngOnInit - Directiva')
  }

}
