import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../../context/Products/ProductsContext";
import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useEffect } from "react";
import { CardSkeleton } from "../../../components/admin/CardSkeleton";

const ShowProduct = () => {
  const { productId } = useParams();
  const { getProductById, product, productInfoLoading } = useProducts();

  useEffect(() => {
    getProductById(productId);
  }, [productId]);

  return (
    <div className="pb-1">
      {productInfoLoading ? (
        <div className="h-[90vh] flex justify-center items-center">
          <CardSkeleton />
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-1/2 min-h-[90vh] py-10 px-16 ">
          <div className="flex flex-col gap-4">
            <span>Product Image</span>
            <img
              src={product?.image}
              className="w-32 h-32 object-contain shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Product Name</span>
            <Input
              size="md"
              disabled
              value={product?.title}
              className=" !border-t-blue-gray-200 disabled:bg-white dark:disabled:bg-gray-800 dark:text-white rounded-sm focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Product Description</span>
            <Textarea
              disabled
              value={product?.description}
              className=" !border-t-blue-gray-200 disabled:bg-white dark:disabled:bg-gray-800 dark:text-white rounded-sm focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span>Product Category</span>
              <Input
                size="md"
                disabled
                value={product?.category || "Generic"}
                className=" !border-t-blue-gray-200 disabled:bg-white dark:disabled:bg-gray-800 dark:text-white rounded-sm w-full focus:!border-gray-700"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>Product Price</span>
              <Input
                size="md"
                disabled
                value={`$${product?.price}`}
                className=" !border-t-blue-gray-200 disabled:bg-white dark:disabled:bg-gray-800 dark:text-white rounded-sm w-full focus:!border-gray-700"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>
          <Link to={`/admin/products/edit/${productId}`}>
            <Button size="md" className="text-xs bg-black rounded-sm">
              Edit Product
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
