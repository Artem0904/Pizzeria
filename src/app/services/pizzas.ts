// export interface PizzaModel {
//     id: number;
//     name: string;
//     price: number;
//     pizzasSizeId: number;
//     cookingTimeMin: number;
// }

export interface PizzaModel {
    id: number;
    name: string;
    categoryId: number;
    discount: number;
    price: number;
}

export interface PizzaResponseModel {
    pizzas: PizzaModel[];
    limit: number;
    skip: number;
    total: number;
}