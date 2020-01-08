import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();


    private recipes: Recipe[] = [
        new Recipe('Croissants',
        'A classic baked good worthy of a French pastry shop',
        'https://i.pinimg.com/originals/f4/b2/b3/f4b2b3f07276cfd7cf28ef821d08a8fd.jpg',
        [
            new Ingredient('Flour', 1),
            new Ingredient('Butter', 3)

        ]),
        new Recipe('Double Fudge Brownies',
        'These brownies always turn out!',
        'https://www.diabolopizza.ch/wp-content/uploads/2017/10/brownies-choco.jpg',
        [
            new Ingredient('Chocolate', 7),
            new Ingredient('Oil', 4)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      setRecipes(recipes: Recipe[]) {
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

    getRecipies() {
        // slice is only return a copy of array
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
