 // import {MOCKCONTACTS} from './MOCKCONTACTS';
import {Injectable} from '@angular/core';
import { Message } from '../messages/message.model';
import { Subject } from 'rxjs';
import { Document } from './document.model';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../contacts/contact.model';
import { map } from 'rxjs/operators'


// @Injectable()
@Injectable()
    export class DocumentService {

     documentChangedEvent =  new Subject<Document[]>();
     startedEditing = new Subject<number>();

     documentSelected = new Subject<Document>(); 
        documents: Document [] = []
        constructor( private documentService: DocumentService,
            private http: HttpClient ){
    
    }
    
    getDocuments(){
        this.http.get<{message: string, documents: any}>('http//:localhost:3000/api/documents')
        .pipe(map((documentData) =>{
         return documentData.documents.map(post =>{
           return {
               name: post.name,
               description:  post.description,
               id: post._id,
               url:  post.url,
               children: post.children

           }
    
         })
        }))
       .subscribe((transformedDocument)=>{
         this.documents =transformedDocument.documents;
         this.documentChangedEvent.next([...this.documents.slice()])
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
        addDocument(document: Document){
            this.http
            .post<{message: string, documentId: string}>('http//:localhost:3000/api/documents', document)
            .subscribe(responseData =>{
              const id = responseData.documentId
              document.id = id;
              this.documents.push(document);
              this.documentChangedEvent.next(this.documents.slice());
            })
          }
          addDocuments(documents: Document[]){
            // for (let ingredient of ingredients){
            //    this.addIngredient(ingredient);   
            // }
            this.documents.push(...documents);
            this.documentChangedEvent.next(this.documents.slice());
     
          }
          deleteDocument(documentId: number){
            this.http.delete('http//:localhost:3000/api/documents' + documentId)
            .subscribe(() => {
              const updatedHouses = this.documents.filter(post => post.id);
              this.documents = updatedHouses;
              this.documentChangedEvent.next([...this.documents.slice()])
    
              
            })
           
    
          }
       
    }
    
          
    

  