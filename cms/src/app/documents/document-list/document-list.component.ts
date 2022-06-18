import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document} from '../document.model';
@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  
  documents: Document[] = [
    new Document(1, 'CIT 260- Object Oriented Programming', '', '', null ),
    new Document(2, 'CIT 366- Full Web Stack Development', '', '', null ),
    new Document(3, 'CIT 425- Data Warehousing', '', '', null ),
    new Document(4, 'CIT 460- Enterprise Development', '', '', null ),
    new Document(5, 'CIT 495- Senior Practicum', '', '', null )
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onDocumentSelected(document: Document){
    this.selectedDocumentEvent.emit(document);
  }

}
