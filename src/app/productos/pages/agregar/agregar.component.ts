import { Component, 
         OnInit,        } from '@angular/core';
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
  // Valores por defecto
  texto1:string="Quetzalli"
  color:string='green'
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
  cambiarNombre(){
    this.texto1=Math.random().toString()
    
  }
  cambiarColor(){
    // Selecciona un color Random 
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color= color
  }
}