import type { RootModel } from "@/store";

import { GET_ALL_CATALOG_ITEMS_API_ENDPOINT, getProductImages } from "@/store/api";
import { CatalogItem } from "@/store/types";
import { createModel } from "@rematch/core";
import axios from "axios";
import Client, { Product } from "shopify-buy";

export enum ProductCategoryFilter {
  ALL = 0,
  APPAREL,
  ACCESSORIES,
}

interface LandingModelState {
  isFirstLanding: boolean;
  showLanding: boolean;
  allProducts: any[] | null;
  featuredProduct: CatalogItem | null;
  categoryFilter: ProductCategoryFilter;
}

export const landingModel = createModel<RootModel>()({
  state: {
    isFirstLanding: true,
    showLanding: false,
    categoryFilter: ProductCategoryFilter.ALL,
  } as LandingModelState,
  reducers: {
    setFirstLanding: (state: LandingModelState, isFirstLanding: boolean) => ({ ...state, isFirstLanding }),
    setShowLanding: (state: LandingModelState, showLanding: boolean) => ({ ...state, showLanding }),
    setAllProducts: (state: LandingModelState, allProducts: Product[]) => ({ ...state, allProducts }),
    setCategoryFilter: (state: LandingModelState, categoryFilter: ProductCategoryFilter) => ({ ...state, categoryFilter }),
    setFeaturedProduct: (state: LandingModelState, featuredProduct: CatalogItem) => ({ ...state, featuredProduct }),
    clearState: () => ({ isFirstLanding: true, showLanding: false, allProducts: null, featuredProduct: null, categoryFilter: ProductCategoryFilter.ALL }),
  },
  selectors: (slice) => ({
    selectAllProducts: () => slice((state: LandingModelState): Product[] | null => state?.allProducts),
    selectIsFirstLanding: () => slice((state: LandingModelState): boolean => state?.isFirstLanding),
    selectShowLanding: () => slice((state: LandingModelState): boolean => state?.showLanding),
    selectFeaturedProduct: () => slice((state: LandingModelState): CatalogItem | null => state?.featuredProduct),
    selectCategoryFilter: () => slice((state: LandingModelState): ProductCategoryFilter => state?.categoryFilter),
  }),
  effects: () => ({
    async handleLanding() {
      setTimeout(() => this.setFirstLanding(false), 2000);
      setTimeout(() => this.setShowLanding(true), 4000);
    },
    async getShopifyProducts() {
      const client = Client.buildClient({
        apiVersion: "2024-01",
        domain: "debc56-7c.myshopify.com",
        storefrontAccessToken: "f920ee40eab69031f0375c9eb4e48d3a",
      });
      const products = (await client.product.fetchAll()).map((product) => product);
      this.setAllProducts(products);
      return;
    },
  }),
});
