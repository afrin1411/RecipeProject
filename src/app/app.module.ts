import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';
import { AppRoutingModule } from './app-routing-module';
import { RecipieStartComponent } from './recipies/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppingComponent,
    RecipieListComponent,
    RecipieDetailsComponent,
    ShoppingEditComponent,
    RecipieItemComponent, 
    DropdownDirective, RecipieStartComponent, RecipieEditComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
