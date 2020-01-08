import { Ingredient } from '../shared/Ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {

        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        let exists = false;
        for (const i of this.ingredients) {
            if ( i.name === ingredient.name) {
                exists = true;
                i.amount = ingredient.amount + i.amount;
            }
        }
        if (!exists) {
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for (const ingredient of ingredients) {
            // const arrayValue = this.ingredients.some(ingredientValue => ingredientValue.name === ingredient.name);
            if (this.ingredients.some(ingredientValue => ingredientValue.name === ingredient.name)) {
                const index = this.ingredients.map(ingredientValue => ingredientValue.name).indexOf(ingredient.name);
                this.ingredients[index].amount += ingredient.amount;
            } else {
                this.addIngredient(ingredient);
            }
        }
        // the ... turns the array of ingredients into a list of ingredients and spreads them
        // this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
