import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../documents/data-storage.service';
import { DataContactStorageService } from './save-data.service';
import { MessageDataStorageService } from '../messages/message-data-storage.service';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private dataStorageService: DataStorageService, 
              private saveDataService: DataContactStorageService,
              private messageDataStorageService: MessageDataStorageService  ) { }

  ngOnInit(): void {
  }
  onSaveData(){
    this.dataStorageService.storeDocuments();
    this.saveDataService.storeContacts();
    this.messageDataStorageService.storeMessages()
   
  }
  onSavaC(){
    // this.dataContactStorgeService.storeContacts();
  }

  onFetchData(){
    this.dataStorageService.fetchDocuments().subscribe();
    this.saveDataService.fetchContacts().subscribe();
    this.messageDataStorageService.fetchMessages().subscribe()
  }

 



}
