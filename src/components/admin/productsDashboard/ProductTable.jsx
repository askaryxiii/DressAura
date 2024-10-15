import { Card, Typography, Button, Avatar } from "@material-tailwind/react";
import { useProducts } from "../../../context/Products/ProductsContext";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Product", "Price", "Operations"];

const ProductTable = () => {
  const { products, deleteProduct } = useProducts();
  return (
    <Card className="h-full">
      <table className="lg:w-full lg:min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 flex">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(({ image, title, price, _id }, index) => (
            <tr key={index} className="">
              <td className="p-4 border-b border-blue-gray-50">
                <div className="flex gap-3 items-center">
                  <Avatar src={image} alt="avatar" size="sm" />
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal">
                    {title}
                  </Typography>
                </div>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal">
                  ${price}
                </Typography>
              </td>
              <td className="p-4 border-b border-blue-gray-50 items-center">
                <div className="flex flex-col md:flex-row lg:flex-row  gap-4 justify-center">
                  <Link to={`/admin/products/${_id}`}>
                    <Button
                      size="sm"
                      className="hover:shadow-none shadow-none ">
                      View
                    </Button>
                  </Link>
                  <Link to={`/admin/products/edit/${_id}`}>
                    <Button
                      size="sm"
                      className="hover:shadow-none shadow-none ">
                      Edit
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      size="sm"
                      color="red"
                      className="hover:shadow-none shadow-none "
                      onClick={() => deleteProduct(image, _id)}>
                      Delete
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ProductTable;
