import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private navegador: Router) {

    //http://localhost:4200/portfolio/{1}
    this.activeRouter.params.subscribe(
      res => console.log(res)
    )

    //http://localhost:4200/portfolio/1?{name=matheus&token=123}
      this.activeRouter.queryParams.subscribe(
        res => console.log(res)
      )
  }

  ngOnInit(): void {

  }
}
