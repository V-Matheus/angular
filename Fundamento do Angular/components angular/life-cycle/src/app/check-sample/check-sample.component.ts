import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Input,
	OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
	standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})

export class CheckSampleComponent implements


OnInit,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit,
OnDestroy
{
	ngOnDestroy(): void {
		
	}

	quantidade:number = 0


	@Input() adicionar() {
		this.quantidade += 1
	}

	decrementar() {
		this.quantidade -= 1
	}

	ngAfterViewInit(): void {

	}
	ngAfterViewChecked(): void {

	}
	ngAfterContentInit(): void {

	}
	ngAfterContentChecked(): void {

	}
	ngDoCheck(): void {

	}
	ngOnInit(): void {

	}

}
