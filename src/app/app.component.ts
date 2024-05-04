import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tema1';
  order:string='';
  onOrderClicked(title: string): void {
    this.order = title;
    console.log('Received in app'+{title})
  }
}
