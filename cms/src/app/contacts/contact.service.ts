// import {MOCKCONTACTS} from './MOCKCONTACTS';
import {Injectable} from '@angular/core';
import { Message } from '../messages/message.model';
import { Contact } from './contact.model';
import { MessageService} from '../messages/message.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';


// @Injectable()
@Injectable({
    providedIn: 'root'
})
    export class ContactService {
        contactChangedEvent =  new Subject<Contact[]>();

     contactSelected = new Subject<Contact>(); 
        contacts: Contact [] = [ ];

        constructor( private contactService: ContactService,
            private http: HttpClient){

        }

        getContacts(){
            this.http.get<{message: string, documents: any}>('http//:localhost:3000/api/contacts')
            .pipe(map((contactData) =>{
             return contactData.documents.map(post =>{
               return {
                   name: post.name,
                   email:  post.email,
                   id: post._id,
                   phone:  post.phone,
                   imageUrl: post.imageUrl,
                   group: post.group
    
               }
        
             })
            }))
           .subscribe((transformedContact)=>{
             this.contacts =transformedContact.documents;
             this.contactChangedEvent.next([...this.contacts.slice()])
           })
           }
        
              //item to edit
            //   getHouse(index: number){
            //     return this.houses[index];
            //   }
              //Update item
            //   updateHouse(index: number, newHouse: House){
            //     this.houses[index] = newHouse;
            //     this.housesChanged.next(this.houses.slice());
        
            //   }
              //deleteIngredient
              // deleteHouse(index: number){
              //   this.houses.splice(index, 1);
              //   this.housesChanged.next(this.houses.slice());
        
              // }
        
        
            //   addHouse(house: House){
            //     this.houses.push(house);
            //     this.housesChanged.next(this.houses.slice());
            //   }
            addDocument(contact: Contact){
                this.http
                .post<{message: string, documentId: string}>('http//:localhost:3000/api/contacts', contact)
                .subscribe(responseData =>{
                  const id = responseData.documentId
                  contact.id = id;
                  this.contacts.push(contact);
                  this.contactChangedEvent.next(this.contacts.slice());
                })
              }
             
              deleteDocument(contactId: number){
                this.http.delete('http//:localhost:3000/api/contacts' + contactId)
                .subscribe(() => {
                  const updatedContacts = this.contacts.filter(post => post.id);
                  this.contacts = updatedContacts;
                  this.contactChangedEvent.next([...this.contacts.slice()])
        
                  
                })
               
        
              }
    }