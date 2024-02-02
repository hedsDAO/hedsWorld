import { storage } from "@/App";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export const GET_ALL_CATALOG_ITEMS_API_ENDPOINT = "https://catalog-v6adscuyxq-uc.a.run.app/get-all-products";
export const GET_PRODUCT_BY_ID_API_ENDPOINT = (id: string) => "https://catalog-v6adscuyxq-uc.a.run.app/product/" + id;
export const GET_PAYMENT_LINK = "https://checkout-v6adscuyxq-uc.a.run.app/create-checkout-link";

export const getProductImages = async (id: string) => {
  const storageRef = ref(storage, `products/${id}`);
  const list = await listAll(storageRef);
  const urls = list.items.map((item) => getDownloadURL(item));
  const images = await Promise.all(urls);
  return images;
};
