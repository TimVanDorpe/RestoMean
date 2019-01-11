import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeDataService} from './recipe-data.service'
import {Subject} from 'rxjs/Subject'
import { distinctUntilChanged, debounceTime,
  map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [RecipeDataService]
})
export class AppComponent implements OnInit{
 public filterRecipeName: string;
 public filterRecipe$ = new Subject<string>();
 private _recipes: Recipe[];
  title = 'Recipes';
  constructor(private _recipeDataService : RecipeDataService)
  {
   this.filterRecipe$
    .pipe(
      distinctUntilChanged(),
      debounceTime(400),
      map(val => val.toLowerCase()),
      filter(val => !val.startsWith('s'))
    )
    .subscribe(val => (this.filterRecipeName = val));
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this._recipeDataService.recipes.subscribe(items => this._recipes = items);
  }

  get recipes(){
    return this._recipes;
  }
  
  applyFilter(filter: string)
  {
    this.filterRecipeName = filter;
  }
  newRecipeAdded(recipe){
    //this._recipes.push(recipe);
    this._recipeDataService.addNewRecipe(recipe).subscribe(item => this._recipes.push(item));
  }
}
