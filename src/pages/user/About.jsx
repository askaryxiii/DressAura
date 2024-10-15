import React from "react";
import { Typography } from "@material-tailwind/react";
import vedio from "../../../public/vedio/3255323-uhd_3840_2160_25fps.mp4";

const About = () => {
  return (
    <section className="p-8  mb-2">
      <div className="mx-auto max-w-screen-md">
        <video className="h-[28rem] w-full rounded-lg mb-4 " autoPlay loop>
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Typography variant="small" className="font-medium !text-blue-500">
          #blog #post
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-4 font-black text-4xl !leading-snug">
          Discover Fashion for the Whole Family...
        </Typography>
        <Typography clhop NameassName="font-normal !text-gray-500">
          At SAMM, we believe fashion is for everyone. That's why we offer an
          extensive range of stylish and affordable clothing for women, men, and
          kids. From chic women's dresses, versatile men's casual and formal
          wear, to fun and comfortable outfits for kids, we have something for
          every taste and occasion. Our curated collections are designed to meet
          your everyday needs and special moments, ensuring that every member of
          the family feels confident and fashionable.
          <br />
          <br />
          Quality is at the heart of what we do. We handpick every piece in our
          store to ensure it meets our high standards of comfort, durability,
          and style. Whether you're refreshing your wardrobe with the latest
          trends or looking for timeless essentials, we're here to help you find
          the perfect fit.
          <br />
          <br />
          Beyond great products, SAMM is dedicated to delivering an exceptional
          shopping experience. Our user-friendly app allows you to browse and
          shop easily, with secure payment options and fast delivery right to
          your doorstep. Plus, our customer service team is always available to
          assist with any questions or concerns.
        </Typography>
      </div>
    </section>
  );
};

export default About;
