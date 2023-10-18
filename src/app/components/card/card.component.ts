import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameCover:string = ""

  @Input()
  gameLabel: string = "Exclusive"

  @Input()
  gamePrice:string = "R$349,90"
  @Input()
  platform:string = "DIGITAL PS5"

  constructor() {}

  ngOnInit(): void {

  }

}
