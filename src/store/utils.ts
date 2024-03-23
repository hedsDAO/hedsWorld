import { CatalogItem, ItemVariationData } from "./types";
import { ProductCategoryFilter } from "@/models/landing";

export const formatPrice = (price?: number): string => {
  if (!price) return "";

  if (price.toString()?.split(".")[1]?.length === 2) return `$${price}`;
  else return `$${price}0`;
};

export const returnVariationSize = (variationName?: string): string => {
  if (!variationName) return "";
  return variationName.split(",")[0];
};

export const returnVariationColor = (variationName?: string): string => {
  if (!variationName) return "";
  return variationName.split(",")[1];
};

export const isItemSoldOut = (item: any, variation: any) => {
  let variations = item?.itemData?.variations;
  let itemData = variations?.find((v: any) => v.id === variation);
  if (itemData?.itemVariationData?.locationOverrides?.[0]?.soldOut) return true;
  else return false;
};

export const returnProductCategory = (product: CatalogItem) => {
  if (product.customAttributeValues) {
    const allAtributes = Object.values(product.customAttributeValues);
    const category = allAtributes.find((attribute) => attribute?.name === "category")?.stringValue;
    if (category === "apparel") return ProductCategoryFilter.APPAREL;
    if (category === "accessories") return ProductCategoryFilter.ACCESSORIES;
    else return ProductCategoryFilter.ALL;
  } else return ProductCategoryFilter.ALL;
};
