import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild([
        { path: '', component: HeaderComponent }
      ])
  ],
})
export class HeaderModule { }
