export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  cityId: number;
  mobile: string;
  avatarUrl: string;
  isLegal: boolean;
  isForeigner: boolean;
  hasPassword: boolean;
  verificationStatus: string;
  nationalIdentityNumber: string;
  gender: string;
  birthdayIso: string;
  cityName: string;
  stateName: string;
  phoneHash: string;
}

export interface Address {
  id: number;
  fullName: string;
  address: string;
  postalCode: string;
  telephone: string;
  mobile: string;
  cityId: number;
  stateId: number;
  supportFmcg: boolean;
  isDefault: boolean;
  latitude: number;
  longitude: number;
  buildingNumber: string;
  unit: string;
  mapImage: {
    storageIds: Record<string, string>;
    url: string[];
    webpUrl: string[];
  };
  isUsable: boolean;
  isGeneralLocationJetEligible: boolean;
}

export interface Digiclub {
  isActivated: boolean;
  points: number;
  rewardUrlThreshold: number;
  claimablePoints: number;
}

export interface Digiplus {
  isActivated: boolean;
  userState: string;
  isGeneralLocationJetEligible: boolean;
}

export interface Notification {
  count: number;
}

export interface Cart {
  id: number;
  itemsCount: number;
  payablePrice: number;
  digiclub: {
    points: number;
  };
  cashBack: {
    amount: number;
    digiplusAmount: number;
    returnDays: number;
  };
  bnplActive: boolean;
  rrpPrice: number;
  shippingCost: number;
  voucherDiscount: number;
  shippingCostDiscount: number;
  itemsDiscount: number;
  totalDiscount: number;
  insurance: {
    amount: number;
    discount: number;
  };
  deliveryPackage: {
    amount: number;
    discount: number;
  };
}

export interface DataLayer {
  event: string;
  data: {
    isLoggedIn: boolean;
    userId: number;
    isClubUser: boolean;
    clubPoints: number;
    rfmCategory: string;
    totalDeliveredOrders: number;
    aov: number;
    magnetMembership: boolean;
    plusMembership: boolean;
    plusMembershipDuration: number;
  };
}

export interface CartItem {
  id: number;
  cartId: number;
  quantity: number;
  price: {
    price: number;
    discount: number;
    isIncredible: boolean;
    isPromotion: boolean;
    isLighteningDeal: boolean;
    isDigiplusPromotion: boolean;
  };
  product: {
    id: number;
    titleFa: string;
    titleEn: string;
    url: {
      uri: string;
    };
    status: string;
    hasQuickView: boolean;
    dataLayer: {
      brand: string;
      category: string;
      metric6: number;
      dimension2: number;
      dimension6: number;
      dimension7: string;
      dimension9: number;
      dimension11: number;
      dimension20: string;
      itemCategory2: string;
      itemCategory3: string;
      itemCategory4: string;
      itemCategory5: string;
    };
    productType: string;
    digiplus: {
      services: string[];
      servicesSummary: string[];
      serviceList: {
        title: string;
      }[];
      isJetEligible: boolean;
      cashBack: number;
      fastShippingText: string;
    };
    images: {
      main: {
        url: string[];
        webpUrl: string[];
      };
    };
    properties: {
      isFastShipping: boolean;
      isShipBySeller: boolean;
      freeShippingBadge: boolean;
      isMultiWarehouse: boolean;
      isFake: boolean;
      hasGift: boolean;
      minPriceInLastMonth: number;
      isNonInventory: boolean;
      isAd: boolean;
      isJetEligible: boolean;
      isMedicalSupplement: boolean;
    };
    rating: {
      rate: number;
      count: number;
    };
    defaultVariantId: number;
  };
  variant: {
    id: number;
    leadTime: number;
    rank: number;
    rate: number;
    statistics: {
      totallySatisfied: {
        rateCount: number;
        rate: number;
      };
      satisfied: {
        rateCount: number;
        rate: number;
      };
      neutral: {
        rateCount: number;
        rate: number;
      };
      dissatisfied: {
        rateCount: number;
        rate: number;
      };
      totallyDissatisfied: {
        rateCount: number;
        rate: number;
      };
      totalCount: number;
      totalRate: number;
    };
    status: string;
    properties: {
      isFastShipping: boolean;
      isShipBySeller: boolean;
      isMultiWarehouse: boolean;
      hasSimilarVariants: boolean;
      isRural: boolean;
      inDigikalaWarehouse: boolean;
    };
    price: {
      sellingPrice: number;
      rrpPrice: number;
      discountPercent: number;
      orderLimit: number;
    };
  };
}

export interface HeaderDataType {
  status: number;
  data: {
    isLoggedIn: boolean;
    digiclub: Digiclub;
    digiplus: Digiplus;
    notification: Notification;
    user: User;
    defaultAddress: Address;
    dataLayer: DataLayer;
    showLocationModal: boolean;
    modules: string[];
    dateTime: string;
    socialProfile: {
      isActivated: boolean;
    };
    cart: Cart;
    cartItems: CartItem[];
  };
}
