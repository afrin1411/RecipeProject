import { Component, OnInit } from '@angular/core';
import {Recipie} from '../recipie.model';
import { RecipieService } from '../recipie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies:Recipie[]=[];
// recipies:Recipie[]=[
//   new Recipie(
//     'Test recipie','this is a simple test',
//     'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg'
//   ),
//   new Recipie(
//     'Another Test recipie','this is a another test',
//     'https://www.tablefortwoblog.com/wp-content/uploads/2018/05/eggplant-parmesan-recipe-photos-tablefortwoblog-1.jpg'
//   )
// ];

//@Output() recipieWasClicked=new EventEmitter<Recipie>();
  constructor(private recipieService:RecipieService,private router:Router) { }

  ngOnInit() {
    this.recipies=this.recipieService.grtRecipie();
  }


  // onRecipieItemClicked(recipie:Recipie)
  // {
  //   this.recipieWasClicked.emit(recipie);
  // }

 
}

