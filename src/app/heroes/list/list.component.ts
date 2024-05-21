import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public ciudadanos: string[] = ['Jose', 'Roberto', 'Mario', 'Alonso', 'Francisco'];
  public deleteCiudadano?: string;

  borrarCiudadano(): void {
    this.deleteCiudadano = this.ciudadanos.pop();

  }

}
