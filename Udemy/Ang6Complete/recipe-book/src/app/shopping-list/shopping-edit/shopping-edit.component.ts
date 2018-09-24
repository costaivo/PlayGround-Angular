import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f')
  shoppingForm: NgForm;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.shoppingForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredients(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }

    form.reset();
    this.editMode = false;
  }
}
