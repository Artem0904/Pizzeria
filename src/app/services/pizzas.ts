
export interface PizzaModel {
    id: number;
    name: string;
    price: number;
    cookingTimeMin: number;
    description: string | null;
    pizzaSizeId: number;
    pizzaSizeDiametr: number;
    imageUrl: string | null;
}

export interface CreatePizzaModel {
    name: string;
    pizzaSizeId: number;
    price: number;
    description: string | null;
    cookingTimeMin: number;
    // ImageUrl: string | null;
}

export interface PizzaSizeModel {
    id: number;
    diametr: number;
}

// export interface PizzaResponseModel {
//     pizzas: PizzaModel[];
//     limit: number;
//     skip: number;
//     total: number;
// }