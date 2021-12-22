import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  // El selector que usaremos para invocar esta directiva
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  // Las directivas tambien pueden recibir entrada de información
  // Una buena idea es mantener un valor por defecto si el usuario no pasa esta información
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es un dato requerido';

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

  // Detectar cambios de valor en los Inputs de la directiva
  ngOnChanges(changes: SimpleChanges): void {
    // Se hace de esta forma ya que para establecer un color o mensaje, los métodos correspondientes a estas tareas,
    // solo se ejecutan una vez dentro del ngOnInit declarado en esta directiva
    console.log(changes)

    // Hay que condicionar por cada Input() declarado en la directiva
    if (changes.mensaje) {
      this.elementHTMLRef.nativeElement.innerHTML = changes.mensaje.currentValue;
    }

    if (changes.color) {
      this.elementHTMLRef.nativeElement.style.color = changes.color.currentValue;
    }
  }

  ngOnInit(): void {
      console.log('ngOnInit - Directiva')
      this.setClass()

      // el color y mensaje no cambian de forma dinámica en el futuro, dado que solo se establecen al inicializar la directiva
      this.setColor()
      this.setMensaje()
  }

  setColor(): void {
    // Cambiar el color del texto del elemento HTML afectado por esta directiva
    this.elementHTMLRef.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    // Cambiar el texto interno del elemeno HTML afectado por esta directiva
    this.elementHTMLRef.nativeElement.innerHTML = this.mensaje;
  }

  setClass(): void {
    this.elementHTMLRef.nativeElement.classList.add('form-text');
  }

}
