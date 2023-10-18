import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit{

  @Input()
  gamePrice:string = "R$349,90"
  @Input()
  platform:string = "DIGITAL PS5"

  constructor() {}

  ngOnInit(): void {

  }

}
