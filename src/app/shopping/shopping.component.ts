import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
 })
export class ShoppingComponent implements OnInit {
ingredients:Ingredient[]=[];
  
// ingredients:Ingredient[]=[
//   new Ingredient('chillis',10),
//   new Ingredient('potato',5)
// ];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingredients= this.shoppingService.getShoppingList();
    this.shoppingService.ingredientsChanged.subscribe(
      (changedIngridient:Ingredient[])=>this.ingredients=changedIngridient
    );
  }
  // onIngridientAdded(ingredient:Ingredient)
  // {
  //   this.ingredients.push(ingredient);
  // }
}
