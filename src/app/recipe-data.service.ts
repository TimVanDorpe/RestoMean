import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class RecipeDataService {
 //private recipes = new Array<Recipe>();
 private readonly _appUrl = "/API/recipes/";
 //add backend url and inject in constructor
  constructor(private http: HttpClient) 
  {
  
   }
get recipes(): Observable<Recipe[]> {
  return this.http
    .get(this._appUrl)
    .pipe(
      map((list: any[]): Recipe[] =>
        list.map(item => 
          new Recipe(item.name, item.ingredients, item.created)
        )
      )
    );
}
addNewRecipe(recipe): Observable<Recipe>{
  return this.http
  .post(this._appUrl, recipe)
  .pipe(
    map((item: any): Recipe =>
    new Recipe(item.name,  item.ingredients , item.created)
  )
  );
}
  
 

}
