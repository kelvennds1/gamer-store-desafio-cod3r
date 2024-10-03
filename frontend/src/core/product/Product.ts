import Prices from "./Prices";
import Specifications from "./Specifications";

export default interface Product extends Prices {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  videoReview: string;
  rating: number;
  tags: string[];

  specifications: Specifications;
}
