"use client";

import "./style.scss";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useAllProducts from "@/store/allProducts";

const AllProducts = () => {
  const { data: allProducts, getData: getAllProducts } = useAllProducts();

  useEffect(() => {
    getAllProducts();
  }, [ getAllProducts]);

  return (
    <div className="product-map">
      {allProducts?.map((product) => (
        <div className="product__border" key={product?._id}>
          <div className="products__card">
            <div className="product__img">
              {/* <Image
                src={
                  product?.image.url ||
                  "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
                }
                alt={product?.title || "Product"}
                fill
                objectFit="cover"
              /> */}
            </div>
            <Link
              href={`/allproducts/${product?._id}`}
              className="product__latest"
            >
              <h3>{product?.title || "Title"}</h3>
              {/* <p>{product?.description || "Quality Product"}</p>
                <p>In stock: {product?.quantity || "Uknown"}</p> */}
              <p>{product?.price || "_"} so`m</p>
            </Link>
            <div className="button__wrapper">
              <button className="latest__btn">Savatga qo`shish</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
