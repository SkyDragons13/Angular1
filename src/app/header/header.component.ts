import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() selectItem = new EventEmitter<string>();
  searchTerm: string = '';
  @Input() order!:string;

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchEvent.emit(this.searchTerm);
  }
}
