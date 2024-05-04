import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    RouterModule.forChild([
        { path: '', component: HeaderComponent }
      ])
  ],
})
export class HeaderModule { }
