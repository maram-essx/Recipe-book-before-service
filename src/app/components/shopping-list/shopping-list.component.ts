import { Component } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
ingredients:Ingredients[]=[
new Ingredients('apple',14),
new Ingredients('banana',42)
,
new Ingredients('mango',4)
,
new Ingredients('pizza',20)

]
}
