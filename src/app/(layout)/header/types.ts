export interface OptionType {
  id: number;
  title: string;
}

export interface DataItemCategoryType {
  id: number;
  title: string;
  list: OptionType[];
}

export interface CategoryType {
  id: number;
  category: string;
  icon: React.ReactNode;
  title: string;
  data: DataItemCategoryType[];
}

export type MegaMenuType = CategoryType[];
