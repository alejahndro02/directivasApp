import { Component, 
         OnInit         } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators,    } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  // Se configuran las propiedades del formulario 
  miFormulario: FormGroup = this.fb.group({
    nombre:['',Validators.required]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // Controla el msj de error
  msjError(campo:string):boolean{
    return this.miFormulario.get(campo)?.invalid || false
  }
}