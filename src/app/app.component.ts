import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tema1';
  searchTerm:string='';
  order:string='';
  onOrderClicked(title: string): void {
    this.order = title;
    console.log('Received in app'+{title})
  }
  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    console.log('Search Arrived '+searchTerm)
  }
  
}
