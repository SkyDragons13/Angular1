
import { Injectable } from '@angular/core';
import { Card } from './cards.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private listOfBikes: Card[] = this.composeListOfBikes();
  private listOfParts:Card[]=this.composeListOfParts();

  constructor() {}

  getListOfBikes(): Card[] {
    return this.listOfBikes;
  }
  getListOfParts():Card[]
  {
    return this.listOfParts;
  }

  private composeListOfBikes(): Card[] {
    return [
      {
        title: 'BMW M1000R',
        image:
          'https://i.pinimg.com/564x/92/4d/8c/924d8cd5183c73789dd59ba77ab911cd.jpg',
        description:
          "Adventure 1000CC model, reliable",
        price:'26,945$',
      },
      {
        title: 'BMW S1000R',
        image:
          'https://i.pinimg.com/564x/4d/e1/9e/4de19ef254ce2df8b6018f986bcc3f5a.jpg',
        description:
          'This is the "clasic" of the 1000CC models',
        price:'24,210$',
      },
      {
        title: 'BMW M1000RR',
        image:
          'https://i.pinimg.com/564x/d5/e8/61/d5e861845913926ba816ea28d646b957.jpg',
        description:'S1000RR younger and faster brother',
        price:'39,940$',
      },
      {
        title: 'BMW S1000RR',
        image:
          'https://i.pinimg.com/564x/a1/a3/55/a1a355a5103bbf3b5e4850876271a91b.jpg',
        description:
          'The most beautiful bike there is',
        price:'22,000$',
      },
    ];
  }
  private composeListOfParts():Card[]
  {
    return[
        {
            title:'Projector',
            image:'https://i.pinimg.com/564x/6b/01/14/6b011416e0bcc93031aefb3dcd90d585.jpg',
            description:'Expensive , but cool looking',
            price:'2000$'
        },
        {
            title:'Body Kit',
            image:'https://i.pinimg.com/564x/22/c9/2b/22c92b2d023044311983ddf7bb7870a6.jpg',
            description:'Full carbon fiber body kit',
            price:'7000$'
        },
        {
            title:'Wheel Stickers',
            image:'https://i.pinimg.com/564x/94/3d/f9/943df96adb50e223037c5aa2242c9128.jpg',
            description:'Red and White RR stickers',
            price:'20$'
        },
        {
          title:'Mirrors',
          image:'https://i.pinimg.com/564x/6c/b5/ac/6cb5aca6d2877b9630c41171dc9f649c.jpg',
          description:'Rear view sport mirrors',
          price:'500$'
        },
    ]
  }
}
