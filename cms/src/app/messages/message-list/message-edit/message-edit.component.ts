import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../message.model';
import { MessageService } from '../../message.service';


@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
 @ViewChild('subjectInput') subjectInputRef!: ElementRef;
 @ViewChild('msgTextInput') messageInputRef!: ElementRef;



  constructor(private mgService: MessageService) { }

  ngOnInit(): void {
  }
  onSendMessage() {
    const ingSubject = this.subjectInputRef.nativeElement.value;
    const ingMessage = this.messageInputRef.nativeElement.value;
   const newMessage =  new Message(1, ingSubject, ingMessage, "Komlavi Djossou")
   this.mgService.addMessage(newMessage);
   this.onClear();
  }
  onClear() {
    this.subjectInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
    
  }

}
