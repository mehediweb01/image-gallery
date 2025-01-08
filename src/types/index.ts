/* eslint-disable @typescript-eslint/no-explicit-any */
export type TCategory = "photo" | "vector";
export interface IImage {
  id: string;
  name: string;
  url: any;
  category: TCategory;
  likes: number;
  shares: number;
}
