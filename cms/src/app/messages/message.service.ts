import { Message } from "./message.model";
import { EventEmitter } from "@angular/core";


export class MessageService {
    messagesChanged = new EventEmitter<Message[]>();

    private  messages: Message [] = [
        new Message(1, 'Grade', 'The grade for this assignment has been posted', 'Bro. Jackson'),
        new Message(2, 'Grade', 'When is assignment 3 due', 'Steve Johnson')
    ];

      getMessages(){
        return  this.messages.slice();
      }
      addMessage(message: Message){
        this.messages.push(message);
        this.messagesChanged.emit(this.messages.slice());
      }
      addMessages(messages: Message[]){
        this.messages.push(...messages);
        this.messagesChanged.emit(this.messages.slice());
 
      }
   
}
