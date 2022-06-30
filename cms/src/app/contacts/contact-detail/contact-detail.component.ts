import { Component, OnInit, Input } from '@angular/core';
import { Contact} from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute , Params, Router} from '@angular/router';


@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact; //refuses to take columns
  id!: number;
  



  constructor( private contactService: ContactService,
             private route: ActivatedRoute,) { }

  ngOnInit(){
    this.route.params
    .subscribe(
     (params: Params) => {
       this.id = +params['id'];
       this.contact = this.contactService.getContact(this.id)
     }
    )

  }

  onDelete() {
    this.contactService.deleteContact(this.contact);
    // route back to the '/documents' URL
 }
  // onAddToMessageList(){
  //   this.contactService.addMessageToMessageList(this.contact.messages)
  // }

}
