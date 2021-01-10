import { Ingredient } from '../shared/ingredient.model';

export class Recipie{
    public name:string;
    public description:string;
    public imagepath:string;
    public ingridient:Ingredient[];

    constructor(name:string,desc:string,imagepath:string,ingridientRqrd:Ingredient[])
{
    this.name=name;
    this.description=desc;
    this.imagepath=imagepath;
    this.ingridient=ingridientRqrd;
}
}

