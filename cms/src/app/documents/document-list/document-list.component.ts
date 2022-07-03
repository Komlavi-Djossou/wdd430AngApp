import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Document} from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  private igChangeSub!: Subscription;
  
  documents!: Document[];

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(){
    this.documents = this.documentService.getDocuments();

    this.igChangeSub = this.documentService.documentChangedEvent
    .subscribe((documents: Document[])=>{
      this.documents = documents;
      });
  }
  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  };
  onNewDocument(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
 

}
