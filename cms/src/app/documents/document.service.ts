 // import {MOCKCONTACTS} from './MOCKCONTACTS';
import {Injectable} from '@angular/core';
import { Message } from '../messages/message.model';
import { Subject } from 'rxjs';
import { Document } from './document.model';
import { MessageService} from '../messages/message.service';
import { Contact } from '../contacts/contact.model';


// @Injectable()
@Injectable()
    export class DocumentService {

     documentChangedEvent =  new Subject<Document[]>();
     startedEditing = new Subject<number>();

     documentSelected = new Subject<Document>(); 
        documents: Document [] = [
            new Document (
                1,
                'CIT 425',
                'Data',
                'https://rkjackson.wordpress.com',
                null),
                new Document (
                    1,
                    'CIT 425',
                    'Data Warehouse',
                    '',
                    null),
                    new Document (
                        1,
                        'CIT 425',
                        'Data',
                        'Warehouse',
                        null),
                        new Document (
                            1,
                            'CIT 425',
                            'Data',
                            'Warehouse',
                            null),
                            new Document (
                                1,
                                'CIT 425',
                                'Data',
                                'Warehouse',
                                null),
                                new Document (
                                    1,
                                    'CIT 425',
                                    'Data',
                                    'Warehouse',
                                    null),
                                    new Document (
                                        1,
                                        'CIT 425',
                                        'Data',
                                        'Warehouse',
                                        null),
                                        new Document (
                                            1,
                                            'CIT 425',
                                            'Data',
                                            'Warehouse',
                                            null),
                                            new Document (
                                                1,
                                                'CIT 425',
                                                'Data',
                                                'Warehouse',
                                                null)
                    
           
        ];
        // constructor( private dmService: DocumentService){
        //     // this.maxDocumentId = this.getMaxId();

        // }

        getDocuments(){

            return this.documents.slice();
        }

        getDocument(index: number){
            return this.documents[index]
          }

        
    // delete button
    deleteDocument(document: Document) {
    if (!document) {
        return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
        return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.next(this.documents.slice());
    }

    // getMaxId(): number{
    //     maxId = 0;
    //     for each document in the documents list
    //     currentId = convert document.id into a number
    //     if currentId > maxId then 
    //     maxId = currentId
    //     endIf
    //     endFor
    //     return
    // }


   
    //     addDocument(newDocument: Document) {
    //         if newDocument is undefined or null then
    //             return
    //         endIf

    //         this.maxDocumentId++
    //         newDocument.id = this.maxDocumentId
    //         push newDocument onto the documents list
    //         documentsListClone = documents.slice()
    //         documentListChangedEvent.next(documentsListClone)
    //     }
        // updateDocument(originalDocument: Document, newDocument: Document) {
       
        //     if (originalDocument || newDocument == undefined || null ){
        //         return
        //     }
        //     (){
        //         pos = documents.indexOf(originalDocument)
        //         if pos < 0 then
        //             return

        //     }
    
        //     endIf
        
        //     newDocument.id = originalDocument.id
        //     documents[pos] = newDocument
        //     documentsListClone = documents.slice()
        //     documentListChangedEvent.next(documentsListClone)
    //     }
    //     deleteDocument(document: Document) {
    //         if document is undefined or null then
    //             return
    //         endIf
        
    //         pos = documents.indexOf(document)
    //         if pos < 0 then
    //             return
    //         endIf
        
    //         documents.splice(pos, 1)
    //         documentsListClone = documents.slice()
    //         documentListChangedEvent.next(doumentsListClone)
    //     }
    addDocument(document: Document){
        this.documents.push(document);
        this.documentChangedEvent.next(this.documents.slice());
      }
      updateDocument(index: number, newRecipe: Document){
        this.documents[index]= newRecipe;
      }
      deleteRecipe(index: number){
        this.documents.splice(index, 1);
        this.documentChangedEvent.next(this.documents.slice())
      }
        
      setDocuments(documents: Document[]){
        this.documents = documents;
        this.documentChangedEvent.next(this.documents.slice())
      }
      
    }

  