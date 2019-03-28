import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BstextcolorDirective } from './bstextcolor.directive';

@NgModule({
  declarations: [ButtonComponent, BstextcolorDirective],
  entryComponents: [],
  imports: [
    CommonModule
  ], 
  exports: [
    ButtonComponent, BstextcolorDirective
  ]
})
export class ButtonModule { }
