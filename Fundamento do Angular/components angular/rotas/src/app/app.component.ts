import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IndexModule } from './pages/index/index.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexModule, PortfolioModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas';
}
