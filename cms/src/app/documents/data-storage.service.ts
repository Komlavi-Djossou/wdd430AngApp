import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { DocumentService } from "../documents/document.service";
import { Document } from "../documents/document.model";
import { map, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor( private http: HttpClient, private documentService: DocumentService) {}
 
  storeDocuments() {
    const documents = this.documentService.getDocuments();
    return this.http.put('https://ng-course-recipe-book-a94dd-default-rtdb.firebaseio.com/documents.json',
    documents)
    .subscribe(response =>{
        console.log(response)
    })
  }

  fetchDocuments(){
    return this.http
    .get<Document[]>(
        'https://ng-course-recipe-book-a94dd-default-rtdb.firebaseio.com/documents.json'
        )
    .pipe(map( documents => {
        return documents.map( document =>{
            return {...document, documents: document.name ? document.name: []
            }
        });
    }),
      tap( documents =>{
           this.documentService.setDocuments(documents)
    }
    ))
   
  }
}