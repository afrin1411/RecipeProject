import{Routes, RouterModule} from '@angular/router'
import { Component, NgModule } from '@angular/core';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { RecipieStartComponent } from './recipies/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';

const appRoot:Routes=[
    {path:'',redirectTo:'/recipies',pathMatch:'full'},
    {path:'recipies',component:RecipiesComponent,children:[
        {path:'',component:RecipieStartComponent},
        {path:'new',component:RecipieEditComponent},
        {path:':id',component:RecipieDetailsComponent},        
        {path:':id/edit',component:RecipieEditComponent}
    ]},
    {path:'shopping',component:ShoppingComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoot)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}