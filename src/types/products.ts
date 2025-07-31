export interface IProduct {
    id: string;
    title: string;
    category: string;
    price: number;
    discountPercentage?: number;
    images: string[];
  }
  