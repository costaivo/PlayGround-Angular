import { Recipe } from "./recipe.model";

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Mackerel Fish Fry', 'With Goan Recheado Masala', 'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png'),

        new Recipe('Tandoori Chicken', 'Tandoori Chicken Without Oven ', 'https://img.sndimg.com/food/image/upload/w_706,h_398,c_fill,fl_progressive,q_80/v1/img/recipes/32/78/24/ItvYJ3YqTDi1TgbRnpsV_image.jpeg'),
        new Recipe('Mackerel Fish Fry', 'With Goan Recheado Masala', 'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png'),
        new Recipe('Mackerel Fish Fry', 'With Goan Recheado Masala', 'http://67.205.180.25/wp-content/uploads/2016/07/mackerel-fish-fry-with-goan-recheado-masala.1024x1024.png'),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}