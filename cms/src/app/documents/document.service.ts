// import {MOCKCONTACTS} from './MOCKCONTACTS';
import {EventEmitter , Injectable} from '@angular/core';
import { Message } from '../messages/message.model';
import { Document } from './document.model';
import { MessageService} from '../messages/message.service';


// @Injectable()
@Injectable()
    export class DocumentService {
     documentSelected = new EventEmitter<Document>(); 
        documents: Document [] = [
            new Document (
                1,
                'CIT 425',
                'Data',
                'Warehouse',
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

        
    }