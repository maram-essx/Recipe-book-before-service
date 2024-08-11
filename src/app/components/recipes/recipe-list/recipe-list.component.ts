import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('recipe 1 ', '1Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quisquam, beatae.', '/assets/images/recipe1.jpg'),
    new Recipe('recipe 2 ', '2Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quisquam, beatae.', '/assets/images/recipe1.jpg'),
    new Recipe('recipe 3 ', '3Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quisquam, beatae.', '/assets/images/recipe1.jpg')
  ,
    new Recipe('recipe 4 ', '4Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quisquam, beatae.', '/assets/images/recipe1.jpg')
  ]

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
