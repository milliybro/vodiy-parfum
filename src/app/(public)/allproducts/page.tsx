import { Metadata } from "next";
import AllProducts from "@/components/allProducts/AllProductsCard";
import "./style.scss"

export const metadata: Metadata = {
  title: "Barcha mahsulotlar",
  description:
    "Vodiy parfum | Barcha mahsulotlar",
};

const AllProductsPage = () => {
  return <section id="all-product-page">AllProductsPage
  <AllProducts/>
  </section>;
};

export default AllProductsPage;
