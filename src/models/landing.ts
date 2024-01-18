import type { RootModel } from "@/store";

import { GET_ALL_CATALOG_ITEMS_API_ENDPOINT } from "@/store/api";
import { CatalogItem } from "@/store/types";
import { createModel } from "@rematch/core";
import axios from "axios";

interface LandingModelState {
  isFirstLanding: boolean;
  showLanding: boolean;
  allProducts: CatalogItem[] | null;
  featuredProduct: CatalogItem | null;
}

export const landingModel = createModel<RootModel>()({
  state: {
    isFirstLanding: true,
    showLanding: false,
  } as LandingModelState,
  reducers: {
    setFirstLanding: (state: LandingModelState, isFirstLanding: boolean) => ({ ...state, isFirstLanding }),
    setShowLanding: (state: LandingModelState, showLanding: boolean) => ({ ...state, showLanding }),
    setAllProducts: (state: LandingModelState, allProducts: CatalogItem[]) => ({ ...state, allProducts }),
    setFeaturedProduct: (state: LandingModelState, featuredProduct: CatalogItem) => ({ ...state, featuredProduct }),
    clearState: () => ({ isFirstLanding: true, showLanding: false, allProducts: null, featuredProduct: null }),
  },
  selectors: (slice) => ({
    selectAllProducts: () => slice((state: LandingModelState): CatalogItem[] | null => state?.allProducts),
    selectIsFirstLanding: () => slice((state: LandingModelState): boolean => state?.isFirstLanding),
    selectShowLanding: () => slice((state: LandingModelState): boolean => state?.showLanding),
    selectFeaturedProduct: () => slice((state: LandingModelState): CatalogItem | null => state?.featuredProduct),
  }),
  effects: () => ({
    async getProducts() {
      try {
        const response = await axios.get(GET_ALL_CATALOG_ITEMS_API_ENDPOINT);
        if (response.data) this.setAllProducts(response.data);
        if (response.data && response.data.length > 0) this.setFeaturedProduct(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
    async handleLanding() {
      setTimeout(() => this.setFirstLanding(false), 2000);
      setTimeout(() => this.setShowLanding(true), 4000);
    },
  }),
});
