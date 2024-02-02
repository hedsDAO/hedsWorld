export interface ItemData {
  name: string;
  description: string;
  labelColor: string;
  taxIds: string[];
  variations: CatalogItem[];
  productType: string;
  skipModifierScreen: boolean;
  itemOptions: ItemOption[];
  imageIds: string[];
  descriptionHtml: string;
  descriptionPlaintext: string;
  isArchived: boolean;
}

export interface CatalogItem {
  type: string;
  id: string;
  updatedAt: Date;
  version: number;
  isDeleted: boolean;
  presentAtAllLocations: boolean;
  itemData?: ItemData;
  productImages?: string[];
  customAttributeValues?: {
    [key: string]: {
      name: string;
      customAttributeDefinitionId: string;
      type: string;
      stringValue?: string;
      numberValue: number;
      key: string;
    };
  };
  itemVariationData?: ItemVariationData;
}

export interface ItemOption {
  itemOptionId: string;
}

export interface ItemVariationData {
  itemId: string;
  name: string;
  sku: string;
  ordinal: number;
  pricingType: string;
  priceMoney: PriceMoney;
  locationOverrides: LocationOverride[];
  trackInventory: boolean;
  itemOptionValues: ItemOptionValue[];
  sellable: boolean;
  stockable: boolean;
}

export interface ItemOptionValue {
  itemOptionId: string;
  itemOptionValueId: string;
}

export interface LocationOverride {
  locationId: string;
  trackInventory: boolean;
  soldOut?: boolean
}

export interface PriceMoney {
  amount: number;
  currency: string;
}
