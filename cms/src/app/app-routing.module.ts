import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent }   from './contacts/contact-edit/contact-edit.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentsResolverService } from './documents/document-resolver.service';
import { ContactsResolverService } from './contacts/contact-resolver.service';


const routes: Routes = [
  {path: '', redirectTo: '/documents', pathMatch: 'full'},

  {path: 'contacts', component: ContactsComponent, children: [
    { path: 'new', component: ContactEditComponent},
    { 
      path: ':id',
     component: ContactDetailComponent,
     resolve: [ContactsResolverService]
    },
     
    { 
      path: ':id/edit', 
      component: ContactEditComponent ,
      resolve: [ContactsResolverService] ,
  }
  ]},

  {path: 'documents', component: DocumentsComponent, children: [
    { path: 'new', component: DocumentEditComponent},
    {
      path:':id', 
      component: DocumentDetailComponent, 
      resolve: [DocumentsResolverService] },
    { 
      path: ':id/edit', 
      component: DocumentEditComponent,
      resolve: [DocumentsResolverService]
    }
  
  ]},
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
