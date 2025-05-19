import { Coffee } from "../model/coffee.entity";


export class CoffeeAssembler {
    static toEntityFromResource(resource) {
        return new Coffee({
            id: resource.id,
            title: resource.title,
            description: resource.description,
            image: resource.image,
            ingredients: resource.ingredients,
            totalSales: resource.totalSales,
            price: resource.price,
            drinkType: resource.drinkType,
        })
    }

    static toEntitiesFromResponse(response) {
        console.log("response", response);
        return response.map((resource) => {
            return this.toEntityFromResource(resource);
        });
    }
    
    static toResourceFromEntity(entity) {
        return {
            id: entity.id,
            title: entity.title,
            description: entity.description,
            image: entity.image,
            ingredients: entity.ingredients,
            totalSales: entity.totalSales,
            price: entity.price,
            drinkType: entity.drinkType,
        };
    }
}