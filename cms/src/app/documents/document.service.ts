// import {MOCKCONTACTS} from './MOCKCONTACTS';
import {EventEmitter , Injectable} from '@angular/core';
import { Message } from '../messages/message.model';
import { Document } from './document.model';
import { MessageService} from '../messages/message.service';


// @Injectable()
@Injectable()
    export class DocumentService {

     documentChangedEvent =  new EventEmitter<Document[]>();

     documentSelected = new EventEmitter<Document>(); 
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
    this.documentChangedEvent.emit(this.documents.slice());
    }
        
    }