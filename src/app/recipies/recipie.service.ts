import { Recipie } from './recipie.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipieService{

recipieClicked=new EventEmitter<Recipie>();

    private recipies:Recipie[]=[
        new Recipie(
          'Pasta','Vegatble pasta',
          'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg',
          [
            new Ingredient(
              'pasta in grams',1
            ),
            new Ingredient(
              'red chilli',5
            ),
            new Ingredient(
              'tomato',2
            ),
            new Ingredient(
              'onion',1
            )
          ]
        ),
        new Recipie(
          'Cheese potato','Baked potato with cheese',
          'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg',
          [
            new Ingredient(
              'pasta in grams',1),
            new Ingredient('red chilli',5),
            new Ingredient('tomato',2),
            new Ingredient('onion',1)
          ]
        ),
  new Recipie(
          'Mousse','this is an another test',
          'https://i.ytimg.com/vi/XFW74wMJ7Ok/hqdefault.jpg',
          [
            new Ingredient('ice-cream',1),
            new Ingredient('strowbwrry',12),
            new Ingredient('cream',2)
          ]
        ),

  new Recipie(
          'Cake','Layered chocolate cake',
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN&w=450&c=sc&poi=face&q=85',
          [
            new Ingredient('eggs',8),
            new Ingredient('strowbwrry',12),
            new Ingredient('coco powder',2),
            new Ingredient('cream',2),
            new Ingredient('flour',2)
          ]
        ),
        
         new Recipie(
          'Dhokla','Khaman Dhokla',
          'https://zaykarecipes.com/wp-content/uploads/2017/01/dhokla-recipe.jpg',
          [
            new Ingredient('flour',1),
            new Ingredient('lemeon',2),
          ]
        )
        
      ];

      grtRecipie()
      {
          return this.recipies.slice();
      }

      onRecipieItemClicked(recipie:Recipie)
      {
        return recipie;
      }

      getRecipieById(index:number)
      {
        return this.recipies[index];
      }
}