import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  id!: number;
  editMode = false;
  documentForm!: FormGroup;

  constructor( private route: ActivatedRoute,
    private documentService: DocumentService,
    private router: Router) { }

  ngOnInit(){
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id - +params['id'];
        this.editMode = params['id'] != null;
        this.initForm(); 
      }
    )
  }
  onSubmit(){
    if (this.editMode){
      this.documentService.updateDocument(this.id, this.documentForm.value);
    }
    else {
      this.documentService.addDocument(this.documentForm.value);
    }
    this.onCancel();
  }
  

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route} )
  }
    private initForm(){

    let documentName = '';
    let documentDescription = '';
    let documentUrl = '';

    this.documentForm = new FormGroup({
      'name': new FormControl(documentName, Validators.required),
      'description': new FormControl(documentDescription, Validators.required),
      'url': new FormControl(documentUrl, Validators.required)
    }); 
  }
  get controls() { // a getter!
    return (<FormArray>this.documentForm.get('ingredients')).controls;
  }
}
