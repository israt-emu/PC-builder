export interface IProduct {
  _id: string;
  id: number;
  image: string;
  productName: string;
  category: string;
  price: number;
  status: string;
  reviews: {name: string; review: string; rating: number}[];
  description: string;
  key_features?: {
    brand?: string;
    model?: string;
    generation?: string;
    graphics?: string;
    resolution?: string;
  };
}
export interface IProductProps {
  products: IProduct[];
}
export interface ISingleProductProps {
  product: IProduct;
}
