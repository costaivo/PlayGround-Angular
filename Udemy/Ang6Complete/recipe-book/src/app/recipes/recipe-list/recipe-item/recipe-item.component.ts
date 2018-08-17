import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<void>();
  @Input('recipe') recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    console.log('Recipe Item Selected')
    this.recipeSelected.emit();
  }

}
