import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false})nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false})amountInputRef:ElementRef;
  //@Output() ingridientAdded=new EventEmitter<Ingredient>();
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  onAddItem()
  {
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngridient=new Ingredient(ingName,ingAmount);
    //this.ingridientAdded.emit(newIngridient);
    this.shoppingService.onAddItem(newIngridient);
  }
}
