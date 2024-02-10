import type { RootModel } from "@/store";
import { createModel } from "@rematch/core";

interface CategoryModelState {
  categories: string[];
}

export const categoriesModel = createModel<RootModel>()({
  state: {
    categories: [],
  } as CategoryModelState,
  reducers: {
    setCategories: (state: CategoryModelState, categories: string[]) => ({ ...state, categories }),
    clearState: () => ({ categories: [] }),
  },
  selectors: (slice) => ({
    selectCategories: () => slice((state: CategoryModelState): string[] => state?.categories),
  }),
  effects: () => ({
    async getCategories() {
      
    },
  }),
});
