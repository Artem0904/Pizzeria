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
    price: number;
    cookingTimeMin: number;
    description: string | null;
    pizzasSizeId: number;
    pizzasSizeDiametr: number;
}

export interface CreatePizzaModel {
    name: string;
    pizzasSizeId: number;
    price: number;
    description: string | null;
    cookingTimeMin: number;
}

// export interface PizzaResponseModel {
//     pizzas: PizzaModel[];
//     limit: number;
//     skip: number;
//     total: number;
// }