import { request } from "@/server/request";
import ProductType from "@/types/product";
import { create } from "zustand";

interface AllProductsType {
  data: ProductType[];
  getData: () => void;
}

const useAllProducts = create<AllProductsType>()((set) => ({
  data: [],
  getData: async () => {
      const {data}: {data: ProductType[]} = await request.get("last-products");
      set({ data: data });
  },
}));

export default useAllProducts;
