import type { RootModel } from "@/store";

import { GET_ALL_CATALOG_ITEMS_API_ENDPOINT, getProductImages } from "@/store/api";
import { CatalogItem } from "@/store/types";
import { createModel } from "@rematch/core";
import axios from "axios";

export enum ProductCategoryFilter {
  ALL = 0,
  APPAREL,
  ACCESSORIES,
}

interface LandingModelState {
  isFirstLanding: boolean;
  showLanding: boolean;
  allProducts: CatalogItem[] | null;
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
    setAllProducts: (state: LandingModelState, allProducts: CatalogItem[]) => ({ ...state, allProducts }),
    setCategoryFilter: (state: LandingModelState, categoryFilter: ProductCategoryFilter) => ({ ...state, categoryFilter }),
    setFeaturedProduct: (state: LandingModelState, featuredProduct: CatalogItem) => ({ ...state, featuredProduct }),
    clearState: () => ({ isFirstLanding: true, showLanding: false, allProducts: null, featuredProduct: null, categoryFilter: ProductCategoryFilter.ALL }),
  },
  selectors: (slice) => ({
    selectAllProducts: () => slice((state: LandingModelState): CatalogItem[] | null => state?.allProducts),
    selectIsFirstLanding: () => slice((state: LandingModelState): boolean => state?.isFirstLanding),
    selectShowLanding: () => slice((state: LandingModelState): boolean => state?.showLanding),
    selectFeaturedProduct: () => slice((state: LandingModelState): CatalogItem | null => state?.featuredProduct),
    selectCategoryFilter: () => slice((state: LandingModelState): ProductCategoryFilter => state?.categoryFilter),
  }),
  effects: () => ({
    async getProducts() {
      try {
        const response = await axios.get(GET_ALL_CATALOG_ITEMS_API_ENDPOINT);
        if (response.data) {
          let updateProductsWithImages: any[] = [];
          for (let i = 0; i < response.data.length; i++) {
            const id = response.data[i]?.id;
            const images = await getProductImages(id);
            response.data[i].productImages = images;
            if (!response?.data?.[i]?.itemData?.isArchived) updateProductsWithImages.push({ ...response.data[i], productImages: images });
          }
          this.setAllProducts(updateProductsWithImages);
        }
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
