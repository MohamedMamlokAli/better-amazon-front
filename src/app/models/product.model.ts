export interface Product {
  _id: string;
  productName: string;
  productDescription: string;
  productManufacturerDetails: { key: string; value: string }[];
  productKeyPoints: string[];
  productDetails: {
    type: { key: string; value: string }[];
  };
  productRating: {
    stars: number;
    count: number;
  };
  isFeatured: boolean;
  isChoice: boolean;
  productSeller: string;
  productPrice: number;
  productImage: string;
  productSecondaryImages: string[];
  productDescriptionImages: string[];
  productCategory: string;
}
export interface Response {
  status: string;
  data: { products: Product[] };
  length: number;
  nofPages: number;
  nofProducts: number;
  page: number;
  productsPerPage: number;
}
