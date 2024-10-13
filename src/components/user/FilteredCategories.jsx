import { useEffect, useState } from "react";
import { useProducts } from "../../context/Products/ProductsContext";
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const FilteredCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { products, setFilteredProducts } = useProducts();

  const productsCategories = products.reduce((accumulator, product) => {
    let category = product.category || "Not Categorized";
    if (!accumulator.includes(category)) {
      accumulator.push(category);
    }
    return accumulator;
  }, []);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          selectedCategories.includes(product.category || "Not Categorized")
        )
      );
    }
  }, [selectedCategories, products]);

  const changeSelectedCategory = (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;
    isChecked
      ? setSelectedCategories([...selectedCategories, category])
      : setSelectedCategories(
          selectedCategories.filter((newCat) => newCat !== category)
        );
  };

  return (
    <div className="lg:flex lg:flex-col gap-3 shadow-none top-20 h-fit ml-20 my-16">
      <span className="uppercase text-xl">Filters</span>
      <div className="flex flex-col p-3 border border-gray-300 dark:border-gray-800">
        <span className="uppercase text-md">Categories</span>
        {productsCategories.map((category, index) => (
          <List key={index} className="!min-w-max lg:!min-w-60 px-0 py-1 ">
            <ListItem className="p-0 hover:bg-inherit ">
              <label
                htmlFor={`category-${index}`}
                className="flex w-full cursor-pointer items-center ">
                <ListItemPrefix className="mr-1 md:mr-3 ">
                  <input
                    type="checkbox"
                    id={`category-${index}`}
                    className=" w-3 h-3  bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={changeSelectedCategory}
                  />
                </ListItemPrefix>
                <Typography
                  htmlFor={`category-${index}`}
                  className="font-normal text-sm cursor-pointer dark:text-white"
                  component="label">
                  {category || "Not Categorized"}
                </Typography>
              </label>
            </ListItem>
          </List>
        ))}
      </div>
    </div>
  );
};

export default FilteredCategories;
