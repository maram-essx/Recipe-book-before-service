import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
 @Input() recipe:Recipe={

 };
 @Output() recipeSelected=new EventEmitter<Recipe>();

 onSelect(recipe:Recipe){
this.recipeSelected.emit(recipe);
 }

}
