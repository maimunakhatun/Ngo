import React from "react";
import Productlist from "./Product";

const ProductArray = () => {
  const Products = [
    {
      id: 1,
      img: "/id1.jpeg",
      name: "Food is Donated",
      price:
        "Restaurants, cafes, grocery stores donate safe, surplus food instead of throwing it away."
    },
    {
      id: 2,
      img: "/id2.jpeg",
      name: "Food is Collected",
      price:
        "Our team collects the food at the right time and ensures it is safe."
    },
    {
      id: 3,
      img: "/id3.jpeg",
      name: "Food is Sorted & Packed",
      price:
        "The food is sorted, checked for quality, and packed with care."
    },
    {
      id: 4,
      img: "/id4.jpeg",
      name: "Reaches Communities",
      price:
        "We partner with NGOs, community kitchens and volunteers."
    },
    {
      id: 5,
      img: "/id5.jpeg",
      name: "Creates a Bigger Impact",
      price:
        "Less food waste, healthier communities, and a cleaner planet."
    },
    {
      id: 6,
      img: "/id3.jpeg",
      name: "Food is Sorted & Packed",
      price:
        "The food is sorted, checked for quality, and packed with care."
    }
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Productlist item={Products} />
        </div>
      </div>
    </div>
  );
};

export default ProductArray;