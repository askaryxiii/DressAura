import { useEffect } from "react";
import ProductCard from "../../components/user/ProductCard";
import { useProducts } from "../../context/Products/ProductsContext";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import FilteredCategories from "../../components/user/FilteredCategories";
import UpArrow from "../../components/user/UpArrow";

const Products = () => {
  const { getAllProducts, productInfoLoading, filteredProducts } =
    useProducts();
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {productInfoLoading ? (
        <div className="h-[90vh] flex items-center justify-center ">
          <ClimbingBoxLoader color="#303b53" size={26} />
        </div>
      ) : (
        <div>
          <div className="flex lg:flex-row pr-10 lg:pr-0 flex-col min-h-screen bg-[#fcfcfc] dark:bg-[#393939]">
            <FilteredCategories />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 lg:gap-3 xl:gap-8 lg:mx-16 mx-auto my-16 h-fit">
              <span className="text-3xl text-gray-800 dark:text-white font-light lg:text-start text-center sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
                All <span className="font-medium">Collections ─── </span>
              </span>
              {filteredProducts?.map(
                (
                  { _id, title, description, price, rating, image, stock },
                  index
                ) => (
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
          <UpArrow />
        </div>
      )}
    </>
  );
};

export default Products;
