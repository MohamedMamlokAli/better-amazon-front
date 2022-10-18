export interface Category {
  id: number;
  categoryName: string;
  categoryOptions: Options[];
}
export interface Options {
  option: string;
}

export interface HomeCategories {
  categoryName: string;
  categoryImage: string;
}
