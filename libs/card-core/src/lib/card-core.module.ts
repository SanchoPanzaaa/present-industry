import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './ui/header/header.component';
import { ContentComponent } from './ui/content/content.component';
import { MaterialModule } from './material.module';
import { NavDropdownComponent } from './ui/nav-dropdown/nav-dropdown.component';
import { SearchComponent } from './ui/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './ui/shared/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusOutDirective } from './ui/shared/directives/focusout.directive';

@NgModule({
  imports: [CommonModule, MaterialModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  declarations: [
    FocusOutDirective,
    SearchFilterPipe,
    UiComponent,
    HeaderComponent,
    ContentComponent,
    NavDropdownComponent,
    SearchComponent,
  ],
  exports: [UiComponent],
})
export class CardCoreModule {}
