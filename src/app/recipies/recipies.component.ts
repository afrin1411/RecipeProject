import { Component, OnInit } from '@angular/core';
import { RecipieService } from './recipie.service';
import { Recipie } from './recipie.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipieService]
})
export class RecipiesComponent implements OnInit {
arrRecipie:{};
  constructor(private recipieService:RecipieService) { }

  ngOnInit() {
this.recipieService.recipieClicked.subscribe(
  (recipie:Recipie)=>this.arrRecipie=recipie
);
  }
  // clickedRecipie(recipieData:{name:string,description:string,imagepath:string})
  // {
  //   this.arrRecipie=recipieData;
  // }
}
