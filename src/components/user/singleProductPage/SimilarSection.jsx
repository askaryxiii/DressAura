import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import ProductCard from "../ProductCard";
import { useProducts } from "../../../context/Products/ProductsContext";

const SimilarSection = () => {
  const { similar } = useProducts();

  return (
    <div className="flex flex-col w-full ">
      <span className="text-3xl w-3/4 text-gray-800 dark:text-white font-light sm:col-span-1 md:col-span-2 lg:col-span-3 pb-14 flex justify-center gap-2">
        Similar <span className="font-medium">Products ─── </span>
      </span>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        className="mySwiper w-3/4"
        modules={[FreeMode, Pagination]}>
        {similar?.map(
          ({ _id, title, description, price, rating, image, stock }, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                title={title}
                description={description}
                price={price}
                rating={rating}
                image={image}
                stock={stock}
                _id={_id}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default SimilarSection;
