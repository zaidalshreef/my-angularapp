import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingeditComponent } from './shopping/shoppingedit/shoppingedit.component';
import { RecipeitemComponent } from './recipe/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipe/recipedetail/recipedetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      ShoppingComponent,
      RecipeComponent,
      ShoppingeditComponent,
      RecipedetailComponent,
      RecipeitemComponent


   ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
