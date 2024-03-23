import type { RootModel } from "@/store";
import { GET_PRODUCT_BY_ID_API_ENDPOINT, getProductImages } from "@/store/api";
import { createModel } from "@rematch/core";
import axios from "axios";
import { CatalogItem } from "@/store/types";
import Client, { Product } from "shopify-buy";

interface ProductModelState {
  product: Product | null;
  selectedVariant: number | null;
  selectedPhoto: number | null;
}

export const productModel = createModel<RootModel>()({
  state: {
    product: null,
    selectedVariant: null,
    selectedPhoto: 0,
  } as ProductModelState,
  reducers: {
    setProduct: (state: ProductModelState, product: Product) => ({ ...state, product }),
    setSelectedVariant: (state: ProductModelState, selectedVariant: number) => ({ ...state, selectedVariant }),
    setSelectedPhoto: (state: ProductModelState, selectedPhoto: number) => ({ ...state, selectedPhoto }),
    clearState: () => ({ product: null, selectedVariant: null, selectedPhoto: null }),
  },
  selectors: (slice) => ({
    selectProduct: () => slice((state) => state.product),
    selectVariant: () => slice((state) => state.selectedVariant),
    selectPhoto: () => slice((state) => state.selectedPhoto),
  }),
  effects: () => ({
    async getShopifyProductByHandle(id: string) {
      const client = Client.buildClient({
        apiVersion: "2024-01",
        domain: "debc56-7c.myshopify.com",
        storefrontAccessToken: "f920ee40eab69031f0375c9eb4e48d3a",
      });
      const product = await client.product.fetchByHandle(id).then((product) => product);
      this.setProduct(JSON.parse(JSON.stringify(product)));
      return;
    },
  }),
});
