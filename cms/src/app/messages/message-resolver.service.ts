import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { MessageDataStorageService } from "./message-data-storage.service";
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Injectable({ providedIn: 'root'})
export class MessagesResolverService implements Resolve<Message[]> {
    constructor( private messageDataStorageService: MessageDataStorageService, private messageService: MessageService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const messages = this.messageService.getMessages();
    if(messages.length === 0){
        return this.messageDataStorageService.fetchMessages();
    }
    else{
        return messages;
    }

    }
}