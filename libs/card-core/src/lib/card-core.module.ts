import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import { HeaderComponent } from './ui/header/header.component';
import { MaterialModule } from './material.module';
import { NavDropdownComponent } from './ui/nav-dropdown/nav-dropdown.component';
import { SearchComponent } from './ui/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './ui/shared/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FocusOutDirective } from './ui/shared/directives/focusout.directive';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './ui/form/form.component';
import { DateFormComponent } from './ui/date-form/date-form.component';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { ButtonComponent } from './ui/button/button.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
  ],
  declarations: [
    FocusOutDirective,
    SearchFilterPipe,

    // components
    UiComponent,
    HeaderComponent,
    NavDropdownComponent,
    SearchComponent,
    FormComponent,
    DateFormComponent,
    SideNavComponent,
    ButtonComponent,
  ],
  exports: [UiComponent],
})
export class CardCoreModule {}
