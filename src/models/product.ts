import type { RootModel } from "@/store";
import { GET_PRODUCT_BY_ID_API_ENDPOINT } from "@/store/api";
import { createModel } from "@rematch/core";
import axios from "axios";
import { CatalogItem } from "@/store/types";


interface ProductModelState {
  product: CatalogItem | null;
  selectedVariant: string | null;
  selectedPhoto: string | null;
}

export const productModel = createModel<RootModel>()({
  state: {
    product: null,
    selectedVariant: null,
    selectedPhoto: null,
  } as ProductModelState,
  reducers: {
    setProduct: (state: ProductModelState, product: CatalogItem) => ({ ...state, product }),
    setSelectedVariant: (state: ProductModelState, selectedVariant: string) => ({ ...state, selectedVariant }),
    setSelectedPhoto: (state: ProductModelState, selectedPhoto: string) => ({ ...state, selectedPhoto }),
    clearState: () => ({ product: null, selectedVariant: null, selectedPhoto: null }),
  },
  selectors: (slice) => ({
    selectProduct: () => slice((state) => state.product),
    selectVariant: () => slice((state) => state.selectedVariant),
    selectPhoto: () => slice((state) => state.selectedPhoto),
  }),
  effects: () => ({
    async getProductById(id: string) {
      const response = await axios.get(GET_PRODUCT_BY_ID_API_ENDPOINT(id));
      const product: CatalogItem = response.data;
      const variantId: string = product.itemData?.variations?.[0]?.id || "";
      const photoId: string = product?.productImages?.[0] || "";
      this.setSelectedVariant(variantId);
      this.setSelectedPhoto(photoId);
      this.setProduct(response.data);
    },
  }),
});
