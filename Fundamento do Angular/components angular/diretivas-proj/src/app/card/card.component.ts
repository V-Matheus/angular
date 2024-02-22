import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos:string[] = []

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'font'
    ]
  }

  adicionar() {
    this.produtos.push('matheus')
  }

  remover(index:number) {
    this.produtos.splice(index, 1)
  }
}
