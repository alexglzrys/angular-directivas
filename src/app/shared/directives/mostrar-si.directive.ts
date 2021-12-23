import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mostrarSi]'
})
export class MostrarSiDirective {

  /**
   * Ejemplo de directiva estructural
   *
   * Construye o destruye el elemento HTML asociado con esta directiva
   * con base al valor booleano pasado como argumento.
   * *mostrarSi="condicion"
   *
   *
   */


  // Se requiere de un @Input Setter para recibir el valor condicional que se asigna directamente a esta directiva
  @Input() set mostrarSi(condicion: boolean) {
    // Construir o destruir el elemento (a través de su referencia) del DOM
    if (condicion)
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    else
      this.viewContainerRef.clear()
  }


  // Inyectar servicios de TemplateRef (un nivel más alto que del ElementRef).
  //    La referencia al elemento HTML para una directiva estructural es todo el elemento (incluidos sus hijos). por eso se usa el *
  // Inyectar servicio encargado de crear o destruir el elemento en el DOM (ViewContainerRef)
  constructor(private templateRef: TemplateRef<HTMLElement>,
              private viewContainerRef: ViewContainerRef) { }



}
