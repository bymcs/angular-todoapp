import { TodoItem } from "./todoitems";

export class Model {
    name: string;
    items: TodoItem[];

    constructor(){
        this.name = "Mehmet Can";
        this.items = [
            // { description : "Kahvaltı", action : true},
            // { description : "Alışveriş", action : false},
            // { description : "Spor", action : true},
            // { description : "Oyun", action : false}
        ]
    }
}

