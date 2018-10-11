import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Mackerel Fish Fry',
      'With Goan Recheado Masala',
      'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png',
      [new Ingredient('Mackerel', 2), new Ingredient('Red Chillies', 2)]
    ),

    new Recipe(
      'Tandoori Chicken',
      'Tandoori Chicken Without Oven ',
      'https://img.sndimg.com/food/image/upload/w_706,h_398,c_fill,fl_progressive,q_80/v1/img/recipes/32/78/24/ItvYJ3YqTDi1TgbRnpsV_image.jpeg',
      [new Ingredient('Chicken', 1)]
    ),
    new Recipe(
      'Mackerel Fish Fry',
      'With Goan Recheado Masala',
      'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png',
      []
    ),
    new Recipe(
      'Mackerel Fish Fry',
      'With Goan Recheado Masala',
      'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png',
      []
    )
  ];

  constructor(private shoppingService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
