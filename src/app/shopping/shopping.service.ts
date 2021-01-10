import { Ingredient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core'

export class ShoppingService{
  private  ingredients:Ingredient[]=[
        new Ingredient('chillis',10),
        new Ingredient('potato',5)
      ];
ingredientsChanged=new EventEmitter<Ingredient[]>();
      getShoppingList()
        {
            return this.ingredients.slice();
        }

        onAddItem(ingredient:Ingredient)
        {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
        }

        onAddRecipieIngridients(ingredient:Ingredient[])
        {
          this.ingredients.push(...ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
        } 
}

