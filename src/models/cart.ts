import type { RootModel } from "@/store";
import { GET_PAYMENT_LINK } from "@/store/api";
import { LOCATION_ID } from "@/store/constants";
import { createModel } from "@rematch/core";
import axios from "axios";

export interface CartItem {
  quantity: string;
  name: string;
  catalogObjectId: string;
  itemType: string;
  image: string;
  price: string;
  size: string;
}

interface CartModelState {
  cart: CartItem[] | null;
  paymentUrl: string | null;
  isDrawerOpen: boolean;
  isRedirecting: boolean;
}

export const cartModel = createModel<RootModel>()({
  state: {
    cart: null,
    paymentUrl: null,
    isDrawerOpen: false,
    isRedirecting: false,
  } as CartModelState,
  reducers: {
    setCart: (state: CartModelState, cart) => ({ ...state, cart }),
    addCartItem: (state: CartModelState, cartItem: CartItem) => {
      if (state.cart) return { ...state, cart: [...state.cart, cartItem] };
      return { ...state, cart: [cartItem] };
    },
    setIsRedirecting: (state: CartModelState, isRedirecting) => ({ ...state, isRedirecting }),
    setPaymentUrl: (state: CartModelState, paymentUrl) => ({ ...state, paymentUrl }),
    setIsDrawerOpen: (state: CartModelState, isDrawerOpen) => ({ ...state, isDrawerOpen }),
    updateCartItem: (state: CartModelState, { index, quantity }) => {
      if (!state.cart) return state;
      const updatedCart = [...state.cart];
      updatedCart[index].quantity = quantity;
      return { ...state, cart: updatedCart };
    },
    removeCartItem: (state: CartModelState, index) => {
      if (!state.cart) return state;
      const updatedCart = [...state.cart];
      updatedCart.splice(index, 1);
      return { ...state, cart: updatedCart };
    },
    clearCart: (state: CartModelState) => ({ ...state, cart: null }),
    clearState: () => ({ cart: null, paymentUrl: null, isDrawerOpen: false, isRedirecting: false }),
  },
  selectors: (slice) => ({
    selectCart: () => slice((state) => state.cart),
    selectIsRedirecting: () => slice((state) => state.isRedirecting),
    selectPaymentUrl: () => slice((state) => state.paymentUrl),
    selectIsDrawerOpen: () => slice((state) => state.isDrawerOpen),
  }),
  effects: () => ({
    async createPaymentLink(cart: CartItem[]) {
      this.setIsDrawerOpen(false);
      this.setIsRedirecting(true);
      const locationId = LOCATION_ID;
      const lineItems = cart.map((item) => ({
        quantity: item.quantity,
        catalogObjectId: item.catalogObjectId,
        itemType: item.itemType,
      }));

      try {
        const response = await axios.post(GET_PAYMENT_LINK, {
          description: "hedsWORLD checkout",
          idempotencyKey: '',
          checkoutOptions: {
            askForShippingAddress: true,
          },
          order: {
            locationId: locationId,
            lineItems,
          },
        });
        console.log(response.data.paymentLink.url);
        this.clearCart();
        this.setPaymentUrl(response.data.paymentLink.url);
      } catch (error) {
        console.log(error);
      }
    },
  }),
});
