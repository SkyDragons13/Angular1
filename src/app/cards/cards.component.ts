import { Component, Input, OnInit,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CardsService } from '../core/cards.service';
import { Card } from '../core/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit,OnChanges {

  @Output() orderClicked = new EventEmitter<string>();
  @Input()searchTerm:string='';
  listOfCards:Card[]=[];
  visibleCards: Card[] = [];
  listOfParts:Card[]=[];
  visibleParts: Card[] = [];
  constructor(private cardsService:CardsService){}

  onOrderClicked(title: string): void {
    this.orderClicked.emit(title);
    console.log('Sent from card' + {title})
  }
  ngOnInit(): void {
    this.listOfCards=this.cardsService.getListOfBikes();
    this.listOfParts=this.cardsService.getListOfParts();
    this.updateVisibleCards(0,3,'all');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm'] && !changes['searchTerm'].firstChange) {
      // If searchTerm changes and it's not the first change,update visible cards based on searchTerm
      this.updateVisibleCards(0, 3, 'bikes'); 
    }
}

  isHovered: boolean = false;

  updateVisibleCards(start: number = 0, end: number = 3, type: string): void {
    if (type === 'all') {
      this.visibleCards = this.listOfCards.slice(start, end);
      this.visibleParts = this.listOfParts.slice(start, end);
    } else if (type === 'bikes') {
      if (this.searchTerm.trim() !== '') {
        this.visibleCards = this.listOfCards.filter(card =>
          card.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        ).slice(start, end);
      } else {
        this.visibleCards = this.listOfCards.slice(start, end);
      }
    } else if (type === 'parts') {
      this.visibleParts = this.listOfParts.slice(start, end);
    }
  }
  scrollCards(direction: string,listOfCards:Card[],visibleCards:Card[],type:string): void {
    const step = 1; 
    const startIndex = listOfCards.indexOf(visibleCards[0]);
    let newIndex=0;
    if (direction === 'prev') {
      newIndex = Math.max(startIndex - step, 0);
    } else if (direction === 'next') {
      newIndex = Math.min(startIndex + step, listOfCards.length - 3);
    }
    if (visibleCards.length < 3 && type=='bikes') {
      return; 
    }
    this.updateVisibleCards(newIndex,newIndex+3,type)
  }
  
  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
