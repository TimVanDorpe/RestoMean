import { Component, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent {
@Output() public newRecipe = new EventEmitter<Recipe>();
 
  addRecipe(newRecipeName: HTMLInputElement):boolean{
 
    return false;
  }
 

}
