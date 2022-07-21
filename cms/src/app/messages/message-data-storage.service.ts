import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { map, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class MessageDataStorageService {
    constructor( private http: HttpClient, private messageService: MessageService) {}
 
  storeMessages() {
    const messages = this.messageService.getMessages();
    return this.http.put('https://ng-course-recipe-book-a94dd-default-rtdb.firebaseio.com/messages.json',
    messages)
    .subscribe(response =>{
        console.log(response)
    })
  }

  fetchMessages(){
    return this.http
    .get<Message[]>(
        'https://ng-course-recipe-book-a94dd-default-rtdb.firebaseio.com/documents.json'
        )
    .pipe(map( messages => {
        return messages.map( message =>{
            return {...message, messages: message.sender ? message.sender: []
            }
        });
    }),
      tap( messages =>{
           this.messageService.setMessages(messages)
    }
    ))
   
  }
}