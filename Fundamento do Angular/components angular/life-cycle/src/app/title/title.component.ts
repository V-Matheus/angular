import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {

	nome: string = 'matheus'

	ngOnInit(): void {
		this.nome = `ola ${this.nome}`
	}

}
