import { globalModel } from "./../models/global";
import { Models } from "@rematch/core";
import { landingModel } from "@/models/landing";
import { productModel } from "@/models/product";
import { cartModel } from "@/models/cart";

export interface RootModel extends Models<RootModel> {
  landingModel: typeof landingModel;
  productModel: typeof productModel;
  cartModel: typeof cartModel;
  globalModel: typeof globalModel;
}
export const models: RootModel = {
  landingModel,
  productModel,
  cartModel,
  globalModel,
};
