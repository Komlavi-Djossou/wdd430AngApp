import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {EventEmitter , Injectable} from '@angular/core';
import { Document } from './document.model';





    export class DocumentService {
        documentSelected = new EventEmitter<Document>(); 

        documents: Document [] = [
         
        ];

            constructor() {
                this.documents = MOCKDOCUMENTS;
            }


        getDocuments(){

            return this.documents.slice();
        }


        getDocument(id: string): Document {
            FOR each document in the documents list
            IF document.id  the id THEN
            RETURN document
            ENDIF
            ENDFOR
            RETURN null
        }
        
    }