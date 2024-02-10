import { CartItem } from "@/models/cart";
import { CatalogItem, ItemVariationData } from "./types";
import { ProductCategoryFilter } from "@/models/landing";

export const formatPrice = (price?: number): string => {
  if (!price) return "";
  return `$${price / 100}`;
};

export const returnVariationSize = (variationName?: string): string => {
  if (!variationName) return "";
  return variationName.split(",")[0];
};

export const returnVariationColor = (variationName?: string): string => {
  if (!variationName) return "";
  return variationName.split(",")[1];
};

export const calculateTotalCost = (cart: CartItem[]) => {
  const totalPrice = cart.reduce((acc, item) => {
    const formattedPrice = item.price.replace("$", "");
    const quantity = Number(item.quantity);
    const totalCostPerItem = Number(formattedPrice) * quantity;
    console.log(totalCostPerItem);
    return acc + totalCostPerItem;
  }, 0);
  const remainderInCents = totalPrice?.toString()?.split(".")[1]?.length;
  if (remainderInCents === 2) return `$${totalPrice}`;
  else if (remainderInCents === 1) return `$${totalPrice.toString()}0`;
  else return `$${totalPrice}.00`;
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
  } else return ProductCategoryFilter.ALL
};
