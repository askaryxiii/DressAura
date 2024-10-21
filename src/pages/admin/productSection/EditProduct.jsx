import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../context/Products/ProductsContext";

const EditProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { getProductById, product, updateProduct } = useProducts();
  const [productInfo, setProductInfo] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });
  useEffect(() => {
    getProductById(productId);
  }, [productId]);
  useEffect(() => {
    if (product) {
      setProductInfo((prev) => ({
        ...prev,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        image: product.image,
      }));
    }
  }, [product]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateProduct(productId, productInfo);
    navigate(`/admin/products/${productId}`);
  };

  return (
    <div className="flex flex-col gap-6 w-1/2 min-h-[90vh] py-10 px-16 ">
      <Typography variant="h4">Edit Product</Typography>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <span>Product Image</span>
          <Input
            className=" !border-t-blue-gray-200 dark:text-white dark:text-white  rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={productInfo?.image || ""}
            onChange={(e) =>
              setProductInfo((prev) => ({
                ...prev,
                image: e.target.value,
              }))
            }
            color="green"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Product Name</span>
          <Input
            size="md"
            value={productInfo?.title || ""}
            onChange={(e) =>
              setProductInfo((prev) => ({ ...prev, title: e.target.value }))
            }
            className=" !border-t-blue-gray-200 dark:text-white rounded-sm focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Product Description</span>
          <Textarea
            value={productInfo?.description || ""}
            onChange={(e) =>
              setProductInfo((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className=" !border-t-blue-gray-200 dark:text-white rounded-sm focus:!border-gray-700"
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
              value={productInfo?.category || "Generic"}
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }
              className=" !border-t-blue-gray-200 dark:text-white rounded-sm w-full focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Product Price</span>
            <Input
              size="md"
              value={`${productInfo?.price}`}
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  price: e.target.value,
                }))
              }
              className=" !border-t-blue-gray-200 dark:text-white rounded-sm w-full focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <span>Product Category</span>
            <Input
              size="md"
              value={productInfo?.stock || 0}
              onChange={(e) =>
                setProductInfo((prev) => ({
                  ...prev,
                  stock: e.target.value,
                }))
              }
              className=" !border-t-blue-gray-200 dark:text-white rounded-sm w-full focus:!border-gray-700"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        </div>
        <Button
          size="md"
          type="submit"
          className="text-xs w-fit bg-black rounded-sm">
          Edit Product
        </Button>
      </form>
    </div>
  );
};

export default EditProduct;
