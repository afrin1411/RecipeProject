import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.component.html',
  styleUrls: ['./recipie-details.component.css']
})
export class RecipieDetailsComponent implements OnInit {
//@Input() recipie:Recipie;
recipie:Recipie;
id:number;
constructor(private shoppingService:ShoppingService,
            private route:ActivatedRoute,
            private recipieService:RecipieService,
            private router:Router) { }


  ngOnInit() {

    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.recipie=this.recipieService.getRecipieById(this.id);
      }
    );

   
  }

  onToShoppingLst(ingriendsTobeAdded:Ingredient[])
  {
    for(let ingridient of ingriendsTobeAdded)
    {
      this.shoppingService.onAddItem(ingridient);
      
    }

}

onEditRecipie()
{
this.router.navigate(['edit'],{relativeTo:this.route})
}
}