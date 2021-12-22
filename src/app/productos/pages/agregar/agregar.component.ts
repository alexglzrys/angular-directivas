import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  mensaje: string = 'Este es un campo obligatorio';
  color: string = 'teal';

  // Inicializar el formulario reactivo
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarMensaje(): void {
    this.mensaje = 'El nombre es un dato requerido';
  }

  cambiarColor(): void {
    this.color = 'gold';
  }

}
