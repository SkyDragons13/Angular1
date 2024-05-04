import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { CardsService } from '../core/cards.service';
import { Card } from '../core/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  listOfCards:Card[]=[];
  visibleCards: Card[] = [];
  listOfParts:Card[]=[];
  visibleParts: Card[] = [];
  constructor(private cardsService:CardsService){}
  @Output() orderClicked = new EventEmitter<string>();

  onOrderClicked(title: string): void {
    this.orderClicked.emit(title);
    console.log('Sent from card' + {title})
  }
  ngOnInit(): void {
    this.listOfCards=this.cardsService.getListOfBikes();
    this.listOfParts=this.cardsService.getListOfParts();
    this.updateVisibleCards();
  }

  isHovered: boolean = false;

  updateVisibleCards(): void {
    this.visibleCards = this.listOfCards.slice(0, 3);
    this.visibleParts=this.listOfParts.slice(0,3);
  }
  scrollCards(direction: string,listOfCards:Card[],type:string): void {
    const step = 1; // Number of cards to scroll
    const startIndex = listOfCards.indexOf(this.visibleCards[0]);
    let newIndex=0;

    if (direction === 'prev') {
      newIndex = Math.max(startIndex - step, 0);
    } else if (direction === 'next') {
      newIndex = Math.min(startIndex + step, listOfCards.length - 3);
    }
    if(type=='bikes')
      this.visibleCards=listOfCards.slice(newIndex, newIndex + 3);
    else
      this.visibleParts=listOfCards.slice(newIndex,newIndex + 3);
  }
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
