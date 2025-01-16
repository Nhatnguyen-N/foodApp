interface coordParams {
  latitude: number;
  longitude: number;
  address: string;
  latitudeDelta: number;
  longitudeDelta: number;
}
export interface restaurantParams {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  foodType: string;
  time: string;
  deliveryTimeFrom: number;
  deliveryTimeTo: number;
  deliveryMethod: string;
  rating: number;
  ratingCount: number;
  coords: coordParams;
}
