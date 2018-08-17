import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Mackerel Fish Fry', 'With Goan Recheado Masala', 'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png'),

    new Recipe('Tandoori Chicken', 'Tandoori Chicken Without Oven ', 'https://img.sndimg.com/food/image/upload/w_706,h_398,c_fill,fl_progressive,q_80/v1/img/recipes/32/78/24/ItvYJ3YqTDi1TgbRnpsV_image.jpeg'),
    new Recipe('Mackerel Fish Fry', 'With Goan Recheado Masala', 'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png'),
    new Recipe('Mackerel Fish Fry', 'With Goan Recheado Masala', 'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('Recipe Item -list Selected');
    this.recipeWasSelected.emit(recipe);
  }

}
