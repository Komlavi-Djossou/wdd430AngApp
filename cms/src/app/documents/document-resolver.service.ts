import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "./data-storage.service";
import { Document } from "./document.model";
import { DocumentService } from "./document.service";

@Injectable({ providedIn: 'root'})
export class DocumentsResolverService implements Resolve<Document[]> {
    constructor( private dataStorageService: DataStorageService, private documentService: DocumentService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const documents = this.documentService.getDocuments();
    if(documents.length === 0){
        return this.dataStorageService.fetchDocuments();
    }
    else{
        return documents;
    }

    }
}