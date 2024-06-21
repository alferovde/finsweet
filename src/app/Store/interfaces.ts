import { SetStateAction, Dispatch } from "react";

export type PostType = {
  id: number;
  title: string;
  img: string;
  bigImage: string;
  categorie_id: number;
  author_id: number;

  date: string;
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  list: string;
};

export type CategoriesType = {
  id: number;
  title: string;
  img: string;
};

export interface SmallPostCardType extends PostType {
  autors: AutorsType[];
  onClick: (arg: SetStateAction<number>) => void;
  currentPost: any;
}

export interface FeaturedPostCardType extends PostType {
  autors: AutorsType[];
  onClick?: (arg: SetStateAction<number>) => void;
  currentPost?: any;
}

export type AutorsType = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string | null;
  updated_at: string | null;
  avatar: string;
};
