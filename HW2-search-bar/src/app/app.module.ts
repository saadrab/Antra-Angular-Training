import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortFirstNamePipe } from './pipes/sort-first-name.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    FilterPipe,
    SortFirstNamePipe,
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
