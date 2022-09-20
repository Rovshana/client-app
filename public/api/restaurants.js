import { AxiosMockRequest, MockCreated } from "../../mocks";
import Restaurants from "../../mocks/Restaurants/restaurants.json";
MockCreated.onGet("/restaurants").reply(200, {
    Restaurants,
});

export const restaurantsApi = AxiosMockRequest.get("/restaurants");

