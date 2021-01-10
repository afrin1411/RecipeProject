import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { RecipieService } from '../../recipie.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
@Input() recipeItem:Recipie;
@Input() index:number;
// @Output() RecipieItemClicked=new EventEmitter<void>() ;               
  constructor(private recipieService:RecipieService) { }

  ngOnInit() {
  }

  // onClickRecipieItem()
  // {
  //   // this.RecipieItemClicked.emit();
  //   this.recipieService.recipieClicked.emit(this.recipeItem);
  // }
}
