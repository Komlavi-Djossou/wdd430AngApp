import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  id!: number;
  editMode = false;
  contactForm!: FormGroup;

  constructor( private route: ActivatedRoute,
    private contactService: ContactService,
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
    // console.log(this.recipeForm)
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['value'], 
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']
    // );
    if (this.editMode){
      this.contactService.updateContact(this.id, this.contactForm.value);
    }
    else {
      this.contactService.addContact(this.contactForm.value);
    }
    this.onCancel();
  }
  
  onAddContact(){
    (<FormArray>this.contactForm.get('messages')).push(
      new FormGroup ({
        'subject': new FormControl(null, Validators.required),
        'sender': new FormControl(null, [
          Validators.required,
          Validators.required 
        ])
      })
    )
  }
  onDeleteContact(index: number){
      (<FormArray>this.contactForm.get('messages')).removeAt(index)
  }
  onRemoveItem(){

  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route} )
  }
    private initForm(){

    let contactName = '';
    let contactEmail = '';
    let contactPhone = '';
    let contactUrl = '';
    let contactMessages = new FormArray([]);
    

    if (this.editMode){
    const contact = this.contactService.getContact(this.id)
      contactName = contact.name;
      contactPhone = contact.phone;
      contactEmail = contact.email;
      contactUrl = contact.imageUrl;
       if(contact['messages']) {
         for (let message of contact.messages) {
           contactMessages.push(
             new FormGroup({
               'id': new FormControl(message.id, Validators.required),
                 'subject': new FormControl(message.subject, Validators.required),
                 'msgText': new FormControl(message.msgText, Validators.required),
               'sender': new FormControl(message.sender, Validators.required)
             }) 
          );
        }
      }
     }

    this.contactForm = new FormGroup({
      'name': new FormControl(contactName, Validators.required),
      'email': new FormControl(contactEmail, Validators.required),
      'phone': new FormControl(contactPhone, Validators.required),
      'imageUrl': new FormControl(contactUrl, Validators.required),
      'messages': contactMessages
    }); 
  }
  get controls() { // a getter!
    return (<FormArray>this.contactForm.get('messages')).controls;
  }
}
