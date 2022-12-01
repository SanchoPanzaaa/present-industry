import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiComponent],
  exports: [UiComponent],
})
export class CardCoreModule {}
