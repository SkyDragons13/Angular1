import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: '', component:FooterComponent }
      ])
  ],
})
export class FooterModule { }
