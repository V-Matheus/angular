import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {
  estilo:string = 'enable'
  corFundo:string = 'red'
  corDaFont:string = 'blue'
  item: string = ''
  lista: string[] = []
  isEnableBloco: boolean = true

  adicionarLista() {
    this.lista.push(this.item)
  }

  trocar() {
    if(this.estilo === 'disabled') {
      this.estilo = 'enable'
    } else {
      this.estilo = 'disabled'
    }
  }
}
