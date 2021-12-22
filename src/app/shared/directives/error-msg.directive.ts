import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // El selector que usaremos para invocar esta directiva
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  // Las directivas tambien pueden recibir entrada de información
  // Una buena idea es mantener un valor por defecto si el usuario no pasa esta información
  @Input() color: string = 'red';
  // Es bueno tener una referencia hacia el elemento HTML afectado de forma global, para trabajar con el en distintos métodos definidos dentro de esta directiva
  elementHTMLRef!: ElementRef<HTMLElement>;

  /**
  * Las directivas en parte también son afectadas por el ciclo de vida de Angular
  * Podemos cambiar el estilo, añadir funcionalidades, u otras cosas al elemento HTML afectado
  */

  // Inyectar la referencia hacia el elemento HTML afectado por esta directiva
  constructor(private el: ElementRef<HTMLElement>) {
    console.log('Constructor - Diectiva')
    console.log(el.nativeElement)

    this.elementHTMLRef = el;
  }

  ngOnInit(): void {
      console.log('ngOnInit - Directiva')
      this.setColor()
  }

  setColor() {
    // Cambiar el color del texto del elemento HTML afectado por esta directiva
    this.elementHTMLRef.nativeElement.style.color = this.color;
  }

}
