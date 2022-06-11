import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
 @ViewChild('subjectInput') subjectInputRef!: ElementRef;
 @ViewChild('msgTextInput') messageInputRef!: ElementRef;
 @Output() addMessageEvent = new EventEmitter<Message>();


  constructor() { }

  ngOnInit(): void {
  }
  onSendMessage() {
    const ingSubject = this.subjectInputRef.nativeElement.value;
    const ingMessage = this.messageInputRef.nativeElement.value;
   const newMessage =  new Message(1, ingSubject, ingMessage, "Komlavi Djossou")
   this.addMessageEvent.emit(newMessage)
   this.onClear();
  }
  onClear() {
    this.subjectInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
    
  }

}
