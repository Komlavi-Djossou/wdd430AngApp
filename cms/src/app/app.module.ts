import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HeaderComponent } from './header.component';
import { ContactItemComponent } from './contact-item/contact-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
