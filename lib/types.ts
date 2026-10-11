export type Product = {
  id: string;
  name: string;
  sizes: string[];
  oldPrice: number;
  price: number;
  images: string[];
  sold: boolean;
  example?: boolean;
};

export type TextReview = { name: string; text: string; stars: number };
/** A string is a screenshot image URL; an object is a text review. */
export type Review = string | TextReview;
