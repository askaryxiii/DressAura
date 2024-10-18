import React, { useEffect } from "react";
import { useProducts } from "../../context/Products/ProductsContext";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import SimilarSection from "../../components/user/singleProductPage/SimilarSection";
import ProductHero from "../../components/user/singleProductPage/ProductHero";

export const SingleProduct = () => {
  let { id } = useParams();
  const {
    product,
    getProductById,
    productInfoLoading,
    getSimilarProducts,
    similar,
  } = useProducts();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    getSimilarProducts(product.category);
  }, [product.category]);

  return (
    <>
      {productInfoLoading && similar ? (
        <div className="h-[90vh] flex items-center justify-center ">
          <ClimbingBoxLoader color="#303b53" size={26} />
        </div>
      ) : (
        <div className="flex flex-col gap-10 pb-16 bg-[#fcfcfc] dark:bg-gray-900">
          <ProductHero id={id} product={product} />
          <SimilarSection />
        </div>
      )}
    </>
  );
};
