import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  // El selector que usaremos para invocar esta directiva
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  // Las directivas tambien pueden recibir entrada de información
  // Una buena idea es mantener un valor por defecto si el usuario no pasa esta información
  // @Input() color: string = 'red';
  // @Input() mensaje: string = 'Este campo es un dato requerido';

  // Al usar @Input como Setter se recomienda declarar propiedades privadas para tener acceso al valor de forma global en la directiva
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es un dato requerido - Directva';

  // Declarar @Input como Setter
  // Esto permite escuchar cambios rápidamente en las entradas sin tener que requerir implementar lógica en el ngOnChanges
  // Estos setters solo se ejecutarán si el componente recibe algún valor en sus Input. Si por alguna razón no se manda ese valor, este setter nunca se ejecutará.
  @Input() set color(value: string) {
    this.elementHTMLRef.nativeElement.style.color = value;
    this._color = value;
  }
  @Input() set mensaje(value: string) {
    this.elementHTMLRef.nativeElement.innerHTML = value;
    this._mensaje = value;
  }
  @Input() set valido(hasError: boolean) {
    // Mostrar u ocultar el elemento HTML afectado por esta directiva con base al resultado de la validación
    // Esta forma no elimina el elemento del DOM, pero lo muestra u oculta con base al resultado.
    this.elementHTMLRef.nativeElement.hidden = !hasError;
  }

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
  /* ngOnChanges(changes: SimpleChanges): void {
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
  } */

  ngOnInit(): void {
      console.log('ngOnInit - Directiva')
      this.setClass()

      // el color y mensaje no cambian de forma dinámica en el futuro, dado que solo se establecen al inicializar la directiva
      // Ver 2. Si no se manda valor en el input, establecemos los valores por defecto declarados en las propiedades privadas
      this.setColor()
      this.setMensaje()
  }



  setColor(): void {
    // Cambiar el color del texto del elemento HTML afectado por esta directiva
    // this.elementHTMLRef.nativeElement.style.color = this.color;

    this.elementHTMLRef.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    // Cambiar el texto interno del elemeno HTML afectado por esta directiva
    // this.elementHTMLRef.nativeElement.innerHTML = this.mensaje;

    this.elementHTMLRef.nativeElement.innerHTML = this._mensaje;
  }

  setClass(): void {
    this.elementHTMLRef.nativeElement.classList.add('form-text');
  }

}
