
import axios from "axios";
import { env } from "../../env";


const http = axios.create({
    baseURL: env.sampleApiUrl,
});

export class CoffeeService { 
    getCoffees(drinkType) {
        if (["iced", "hot"].includes(drinkType)) {
            return http.get(`/coffee/${drinkType}`);
        }
        console.error(`Drink type ${drinkType} is not supported`);
    }
    
    // Method to add a new coffee
    // Note: This is a mock implementation as the sample API may not support POST
    createCoffee(coffeeData) {
        // In a real implementation, this would send a POST request:
        // return http.post('/coffee', coffeeData);
        
        // For now, just log and return a mock success response
        console.log('Creating new coffee:', coffeeData);
        return Promise.resolve({
            data: {
                ...coffeeData,
                id: `mock-${Date.now()}` // Generate a mock ID
            }
        });
    }
}