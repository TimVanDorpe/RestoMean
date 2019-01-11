import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
    AddrecipeComponent,
    RecipeComponent,
    IngredientComponent,
    RecipeFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
