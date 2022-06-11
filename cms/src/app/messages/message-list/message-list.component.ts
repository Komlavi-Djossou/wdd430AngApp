import { Component, OnInit } from '@angular/core';
import { Message} from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(1, 'Grade', 'The grade for this assignment has been posted', 'Bro. Jackson'),
    new Message(2, 'Grade', 'When is assignment 3 due', 'Steve Johnson')
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onAddMessage(message: Message){
    this.messages.push(message)
  }

}
