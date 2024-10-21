import { Card, Typography, Button, Avatar } from "@material-tailwind/react";
import { useProducts } from "../../../context/Products/ProductsContext";
import { Link } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import { useEffect } from "react";
import ProductTable from "../../../components/admin/productsDashboard/ProductTable";

const ProductDashboard = () => {
  const { products, getAllProducts, deleteProduct, productInfoLoading } =
    useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      {productInfoLoading ? (
        <div className="h-[90vh] flex items-center justify-center ">
          <BounceLoader color="#2d5335" />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6 lg:px-10 px-2 py-10 flex-nowrap">
          <Typography variant="h2">Products</Typography>
          <Link className="w-fit" to={"/admin/products/add"}>
            <Button className="w-fit shadow-none dark:outline dark:outline-1 dark:border-white hover:shadow-none bg-black rounded-sm">
              Add a new products
            </Button>
          </Link>
          <ProductTable />
        </div>
      )}
    </>
  );
};

export default ProductDashboard;

{
  /* <div className='w-full flex flex-col gap-4 px-5'>
          <h1 className='text-center text-4xl text-gray-900 dark:text-gray-200 font-bold mt-4'>
            Products
          </h1>
          <Link to={`/admin/products/add`}>
            <Button color='green' className='w-fit'>
              Add New Product
            </Button>
          </Link>
          <section className='w-full '>
            <Card className='h-full w-full bg-blue-gray-700  border border-gray-500 dark:border-none px-6 '>
              <table className='w-full min-w-max table-auto text-center'>
                <thead>
                  <tr>
                    {TABLE_HEAD.map(head => (
                      <th key={head} className=' pb-4 pt-10 '>
                        <Typography
                          variant='small'
                          color='black'
                          className='font-bold leading-none text-xl'
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products?.map(({ image, price, _id }, index) => (
                    <tr key={index} className='border border-teal-900'>
                      <td>
                        <Avatar
                          src={image}
                          alt='avatar'
                          size='lg'
                          className='my-0.5'
                        />
                      </td>
                      <td>
                        <Typography
                          variant='small'
                          className='font-normal text-white text-lg'
                        >
                          {price}

                          <span className='text-green-400 text-xl'> $</span>
                        </Typography>
                      </td>
                      <td className='w-1/3'>
                        <Typography
                          variant='small'
                          as={'div'}
                          className='font-normal text-white flex items-center justify-center gap-8 '
                        >
                          <Link to={`/admin/products/${_id}`}>
                            <Button color='blue'>View </Button>
                          </Link>
                          <Link to={`/admin/products/edit/${_id}`}>
                            <Button color='amber'>Edit</Button>
                          </Link>
                          <Button
                            color='red'
                            onClick={() => {
                              deleteProduct(image, _id)
                            }}
                          >
                            Delete
                          </Button>
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>
        </div> */
}
