import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/Products/ProductsContext";
import { useParams } from "react-router-dom";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { Button } from "@material-tailwind/react";

export const SingleProduct = () => {
  let { id } = useParams();
  const { product, getProductById } = useProducts();
  const [starRating, setStarRating] = useState(Math.round(product.rate));
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#fdac3b",
    inactiveFillColor: "#bcc4cd",
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-center">
        <div>
          <img src={product?.image} className="h-96 w-3/4" />
        </div>
        <div className="flex flex-col w-1/2">
          <span>{product?.title}</span>
          <div className="flex gap-2 items-center">
            <Rating
              itemStyles={myStyles}
              style={{ maxWidth: 80 }}
              value={starRating}
              readOnly
            />
            <span className="text-gray-900 text-xs">
              ({product?.rating?.count})
            </span>
          </div>
          <span> ${product?.price} </span>
          <span> {product?.description} </span>
          <Button className="w-fit">Add to cart</Button>
        </div>
      </div>
    </div>
  );
};
