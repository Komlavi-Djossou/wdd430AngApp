import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Params, Router} from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';

import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document!: Document;
  id!: number;
  nativeWindow: any;
  documentList!: Document[];


  constructor( private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private WindowRefService: WindRefService ) { 
      this.nativeWindow = WindowRefService.getNativeWindow();
}

  ngOnInit(){
    this.route.params
    .subscribe(
     (params: Params) => {
       this.id = +params['id'];
       this.document = this.documentService.getDocument(this.id)
     }
    )
  }
  onView(){
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }

  }
  onDelete() {
    this.documentService.deleteDocument(this.document);
    // route back to the '/documents' URL
 }
 onEditDocument(){
  this.router.navigate(["edit"], {relativeTo: this.route})
}
  
}
