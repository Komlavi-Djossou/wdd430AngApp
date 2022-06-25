// import {MOCKCONTACTS} from './MOCKCONTACTS';
import {EventEmitter , Injectable} from '@angular/core';
import { Message } from '../messages/message.model';
import { Contact } from './contact.model';
import { MessageService} from '../messages/message.service';


// @Injectable()
@Injectable({
    providedIn: 'root'
})
    export class ContactService {
     contactSelected = new EventEmitter<Contact>(); 
        contacts: Contact [] = [
            new Contact (
                '1',
                'Blaine Roberston',
                '',
                '',
                '../assets/images/robertsonb.jpg',
                [
                    new Message (1, 'Math', 'it is hard', 'Komlavi'),
                    new Message (1, 'Math', 'it is hard', 'Komlavi')

                ]),
                new Contact (
                    '1',
                    'Bradley Amstrong',
                    '',
                    '',
                    '../assets/images/armstrongb.jpg',
                    [
                        new Message (1, 'Math', 'it is hard', 'Komlavi'),
                        new Message (1, 'Math', 'it is hard', 'Komlavi')
    
                    ]),
                    new Contact (
                        '1',
                        'Brent Morring',
                        '',
                        '',
                        '../assets/images/robertsonb.jpg',
                        [
                            new Message (1, 'Math', 'it is hard', 'Komlavi'),
                            new Message (1, 'Math', 'it is hard', 'Komlavi')
        
                        ]),
                        new Contact (
                            '1',
                            'Computer Team',
                            '',
                            '',
                            '',
                            [
                                new Message (1, 'Math', 'it is hard', 'Komlavi'),
                                new Message (1, 'Math', 'it is hard', 'Komlavi')
            
                            ]),
                            new Contact (
                                '1',
                                'Craig Lindstrom',
                                '',
                                '',
                                '../assets/images/lindstromc.jpg',
                                [
                                    new Message (1, 'Math', 'it is hard', 'Komlavi'),
                                    new Message (1, 'Math', 'it is hard', 'Komlavi')
                
                                ])
           
        ];
        constructor( private mgService: MessageService){

        }

        getContacts(){

            return this.contacts.slice();
        }

        addMessageToMessageList(messages: Message[]){
            this.mgService.addMessages(messages);   
        }
    }