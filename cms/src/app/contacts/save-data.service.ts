import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { ContactService } from "./contact.service";
import { Contact } from "./contact.model";
import { map, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DataContactStorageService {
    constructor( private http: HttpClient, private contactService: ContactService) {}
 
  storeContacts() {
    const contacts = this.contactService.getContacts();
    return this.http.put('https://ng-course-recipe-book-a94dd-default-rtdb.firebaseio.com/contacts.json',
    contacts)
    .subscribe(response =>{
        console.log(response)
    })
  }

  fetchContacts(){
    return this.http
    .get<Contact[]>(
        'https://ng-course-recipe-book-a94dd-default-rtdb.firebaseio.com/documents.json'
        )
    .pipe(map( contacts => {
        return contacts.map( contact =>{
            return {...contact, contacts: contact.name ? contact.name: []
            }
        });
    }),
      tap( contacts =>{
           this.contactService.setContacts(contacts)
    }
    ))
   
  }
}