import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useProducts } from "../../../context/Products/ProductsContext";
import { useEffect } from "react";
import ProductCard from "../ProductCard";
const HomeSlide2 = () => {
  const { getAllProducts, productInfoLoading, products } = useProducts();
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-20 dark:bg-gray-400">
      <div className="flex flex-col items-center gap-4 w-1/2">
        <span className="text-5xl text-gray-800 dark:text-white font-light lg:text-start text-center sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
          All <span className="font-medium">Collections ─── </span>
        </span>
        <span className="text-center">
          an extensive range of stylish and affordable clothing for women, men,
          and kids. From chic women's dresses, versatile men's casual and formal
          wear, to fun and comfortable outfits for kids.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-3 xl:gap-8 lg:mx-16 mx-auto my-16 h-fit">
        {products?.map(
          ({ _id, title, description, price, rating, image, stock }, index) => (
            <ProductCard
              key={index}
              title={title}
              description={description}
              price={price}
              rating={rating}
              image={image}
              stock={stock}
              _id={_id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default HomeSlide2;
