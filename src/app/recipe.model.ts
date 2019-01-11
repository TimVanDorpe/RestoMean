export class Recipe {
  private _name: string;
  private _dateAdded: Date = new Date();
  private _ingredients = new Array<string>();

  constructor(name: string, ingredients : string[], created : Date) {
    this._name = name;
    this._dateAdded = created;
    this._ingredients = ingredients;
  }
  get name() : string {
    return this._name;
  }	
  addIngredient(name: string, amount?: number, unit?: string) {
    this._ingredients.push(`${amount || 1} ${unit || ""} ${name}`);
  }
 /* toJSON(){
    return{
      name: this._name,
      dateAdded : this._dateAdded,
      ingredients : this._ingredients;
    }
  }*/
}