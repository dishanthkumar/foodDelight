export interface RestaurantDetail{
    name: string,
    description?: string,
    location?: ResLocation,
    id: string,
    websiteURL?: string;
}

export interface ResLocation{
    address: string,
    city: string,
    state: string,
    postalCode: string
}