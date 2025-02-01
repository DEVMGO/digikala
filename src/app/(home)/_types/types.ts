export interface WidgetBase {
  type: string;
  name: string;
  data: WidgetsType;
}

export interface PlaceholderWidget {
  type: string;
  name: string;
  data: {
    identifier: string;
  };
}

export interface BNPLCreditTouchPointWidget {
  type: string;
  name: string;
  endpoint: string;
}

export interface FullSliderWidget {
  type: string;
  name: string;
  data: Array<{
    id: number;
    image: string;
    webp_image: string;
    title: string;
    is_ad: boolean;
    url: { uri: string };
    video: string;
    description: string;
    action_title: string;
    show_percentage: number;
    opening_type: string;
    ratio_type: string;
    display_option: string;
    hex_code: string;
    is_smart_ads: boolean;
    zone: string;
  }>;
}

export interface SuperAppFreshTouchPointWidget {
  type: string;
  name: string;
  data: {
    title: string;
    slogan: string;
    badge_title: string;
    image: {
      url: string[];
    };
  };
}

export interface DeepLinkData {
  id: number;
  title: string;
  description?: string;
  is_show_more: boolean;
  is_digikala_group_service: boolean;
  icon: {
    storage_ids: { [key: string]: string };
    url: string[];
    webp_url: string[];
  };
  url: {
    base?: string;
    uri: string;
  };
}

export interface DeepLinksWidget {
  type: string;
  name: string;
  data: DeepLinkData[];
}

export interface Product {
  id: number;
  title_fa: string;
  title_en?: string;
  url: { uri: string };
  status: string;
  has_quick_view: boolean;
  data_layer: {
    brand: string;
    category: string[];
    metric6?: number;
    dimension2: number;
    dimension6: number;
    dimension7: string;
    dimension9?: number;
    dimension11?: number;
    dimension20: string;
    item_category2: string;
    item_category3: string;
    item_category4?: string;
    item_category5?: string;
    dimension19: string;
  };
  product_type: string;
  digiplus: {
    services: string[];
    services_summary: string[];
    service_list: Array<{ title: string }>;
  };
  price: {
    selling_price: number;
    rrp_price: number;
    order_limit: number;
    is_incredible: boolean;
    discount_percent: number;
  };
  rating?: {
    rate: number;
    count: number;
  };
}

export interface ProductsCartWidget {
  type: string;
  name: string;
  data: {
    title: string;
    discount_percent: number;
    see_more_url: { uri: string };
    products: Product[];
    products_count: number;
  };
}

export type WidgetsType = FullSliderWidget;
//   | PlaceholderWidget
//   | BNPLCreditTouchPointWidget
//   | SuperAppFreshTouchPointWidget
//   | DeepLinksWidget
//   | ProductsCartWidget;

export interface WidgetsResponse {
  status: number;
  data: {
    widgets: WidgetsType[];
  };
}
