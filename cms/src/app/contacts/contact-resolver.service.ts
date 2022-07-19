import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { DataContactStorageService } from "./save-data.service";
import { Contact } from "./contact.model";
import { ContactService } from "./contact.service";

@Injectable({ providedIn: 'root'})
export class ContactsResolverService implements Resolve<Contact[]> {
    constructor( private dataStorgeService: DataContactStorageService, private contactService: ContactService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const contacts = this.contactService.getContacts();
    if(contacts.length === 0){
        return this.dataStorgeService.fetchContacts();
    }
    else{
        return contacts;
    }

    }
}