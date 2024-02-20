import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
	@Input() nome: string = ''

	constructor() {
		console.log('construtor');
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('onChange');
	}


	ngOnInit(): void {
		console.log('ngOnInit');

	}

}
