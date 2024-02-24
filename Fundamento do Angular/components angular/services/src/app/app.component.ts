import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>Aula de services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,
  imports: [RouterOutlet, CardComponent, HttpClientModule],
  providers:[PokemonService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
}
