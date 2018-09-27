import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private receipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let imgUrl = '';
    let receipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.receipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imgUrl = recipe.imagePath;
      receipeDescription = recipe.description;

      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9]+[1-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageUrl: new FormControl(imgUrl, Validators.required),
      description: new FormControl(receipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {
    // const recipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['iamgePath'],
    //   this.recipeForm.value['ingredients']
    // );

    if (this.editMode) {
      this.receipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.receipeService.addRecipe(this.recipeForm.value);
    }
  }

  onAddIngredient() {
    console.log('Adding new Ingredient');
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[0-9]+[1-9]*$/)
        ])
      })
    );
  }
  onCancel() {
    this.router.navigate(['/recipes'], { relativeTo: this.route });
  }
}
