import {MOCKCONTACTS} from './MOCKCONTACTS';
import {EventEmitter , Injectable} from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';
// import {Injectable} from '@angular/core';
// import { Recipe } from './recipe.model';
import { Contact } from './contact.model';
// import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';


// @Injectable()
@Injectable({
    providedIn: 'root'
})
// export class RecipeService {
    export class ContactService {
//     recipeSelected = new EventEmitter<Recipe>(); 
    contactSelected = new EventEmitter<Contact>();
        contacts: Contact [] = [
            //  private  contacts: Contact[] = [
            //     new Contact(1, 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../assets/images/jacksonk.jpg', null),
            //     new Contact(2, 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../assets/images/barzeer.jpg', null)
            //   ];
//    private  recipes: Recipe [] = [
//         new Recipe (
//          'Tasty Schnizel',
//          'A super-tasty Schnitzel - just awesome',
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
//           [ 
//             new Ingredient( 'Meat', 1),
//             new Ingredient( 'French Fries', 1)
//         ]),
//         new Recipe (
//             'Big Fat Burger',
//            'What else you need to say?',
//           'https://th.bing.com/th/id/R.c5650e7fe28021c182cd31eeee881f38?rik=I6ArE4MWgZSdRQ&pid=ImgRaw&r=0',
//           [new Ingredient('Buns', 2),
//           new Ingredient( 'Meat', 1)
//         ])
        ];
//       ];
//       constructor( private slService: ShoppingListService){

//       }
            constructor() {
                this.contacts = MOCKCONTACTS;
            }

//       getRecipes(){
        getContacts(){
//         return this.recipes.slice();
            return this.contacts.slice();
        }
//       }

        getContact(id: string): Contact {
            FOR each contact in the contacts list
            IF contact.id  the id THEN
            RETURN contact
            ENDIF
            ENDFOR
            RETURN null
        }
        
//       addIngredientsToShoppingList(ingredients: Ingredient[]){
//         this.slService.addIngredients(ingredients);

//       }
// }
    }