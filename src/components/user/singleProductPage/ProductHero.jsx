import { Rating, ThinStar } from "@smastrom/react-rating";
import { Button, Spinner } from "@material-tailwind/react";
import { useCart } from "../../../context/cart/CartContext";
import { useState } from "react";

const ProductHero = ({ id, product }) => {
  const { addItemsToCart, cartLoading } = useCart();
  const [starRating, setStarRating] = useState(Math.round(product.rate));
  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: "#fdac3b",
    inactiveFillColor: "#bcc4cd",
  };
  return (
    <div className="flex lg:flex-row flex-col justify-around gap-7 lg:px-36 py-20 items-center">
      {/* Image */}
      <div className="max-w-96 flex justify-center">
        <img src={product?.image} className="h-96" />
      </div>
      {/* details of product */}
      <div className="flex flex-col  gap-2 w-2/5 ">
        <div className="flex flex-col gap-1">
          <span className="text-xl font-medium">{product?.title}</span>
          <div className="flex gap-2 items-center">
            <Rating
              itemStyles={myStyles}
              style={{ maxWidth: 100 }}
              value={starRating}
              readOnly
            />
            <span className="text-gray-900 text-xs">
              ({product?.rating?.count})
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-medium"> ${product?.price} </span>
          <span className="text-sm text-gray-600 text-balance">{product?.description}</span>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            size="sm"
            className="w-fit rounded-none text-sm"
            onClick={() => {
              addItemsToCart(id);
            }}
            disabled={cartLoading[id]?.add}
          >
            {cartLoading[id] && cartLoading[id].add ? (
              <Spinner />
            ) : (
              "Add to cart"
            )}
          </Button>
          <hr />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">100% Original Product</span>
          <span className="text-sm text-gray-600">
            Cash on delivery is available on this Product
          </span>
          <span className="text-sm text-gray-600">
            Easy return and exchange policy within 7 Days
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
