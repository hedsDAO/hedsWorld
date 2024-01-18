import { CartItem } from "@/models/cart";

export const formatPrice = (price?: number): string => {
  if (!price) return "";
  return `$${(price / 100).toFixed(2)}`;
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
