import type { RootModel } from "@/store";
import { createModel } from "@rematch/core";
import Client, { Checkout, CheckoutLineItemUpdateInput } from "shopify-buy";

interface LineItem {
  variantId: string;
  quantity: number;
}

interface CartModelState {
  isDrawerOpen: boolean;
  checkout: Checkout | null;
  cart: LineItem[] | [];
  isCheckingOut: boolean;
}

const client = Client.buildClient({
  apiVersion: "2024-01",
  domain: "debc56-7c.myshopify.com",
  storefrontAccessToken: "f920ee40eab69031f0375c9eb4e48d3a",
});

export const cartModel = createModel<RootModel>()({
  state: {
    isDrawerOpen: false,
    checkout: null,
    isCheckingOut: false,
  } as CartModelState,
  reducers: {
    setCheckout: (state: CartModelState, checkout: Checkout) => ({ ...state, checkout }),
    setIsDrawerOpen: (state: CartModelState, isDrawerOpen: boolean) => ({ ...state, isDrawerOpen }),
    setIsCheckingOut: (state: CartModelState, isCheckingOut: boolean) => ({ ...state, isCheckingOut }),
    clearState: () => ({ checkout: null, isDrawerOpen: false, cart: [], isCheckingOut: false }),
  },
  selectors: (slice) => ({
    selectIsDrawerOpen: () => slice((state) => state.isDrawerOpen),
    selectIsCheckingOut: () => slice((state) => state.isCheckingOut),
    selectCheckout: () => slice((state) => state.checkout),
    selectCheckoutLineItems: () => slice((state) => state.checkout?.lineItems),
  }),
  effects: () => ({
    async createCheckout() {
      client.checkout.create().then((checkout) => {
        console.log(checkout);
        this.setCheckout(checkout);
      });
    },
    async addLineItemToCart([checkoutId, lineItemToAdd]: [string, LineItem[]]) {
      client.checkout.addLineItems(checkoutId, lineItemToAdd).then((checkout) => {
        this.setCheckout(checkout);
      });
    },
    async removeLineItemFromCart([checkoutId, lineItemIdsToRemove]: [string, string[]]) {
      client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((checkout) => {
        this.setCheckout(checkout);
      });
    },
    async updateLineItemInCart([checkoutId, lineItemToUpdate]: [string, CheckoutLineItemUpdateInput[]]) {
      client.checkout.updateLineItems(checkoutId, lineItemToUpdate).then((checkout) => {
        this.setCheckout(checkout);
      });
    },
    async fetchCheckout(checkoutId: string) {
      client.checkout.fetch(checkoutId).then((checkout) => {
        this.setIsCheckingOut(true);
        this.setCheckout(checkout);
      });
    },
  }),
});
