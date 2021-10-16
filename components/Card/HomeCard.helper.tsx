import shoeImg from "../../static/images/nike-black.png";
import mobPic from "../../static/images/mobile.png";
import watch from "../../static/images/watch.png";

export const HomeCardData = [
  {
    quantity: 0,
    keyI: 921,
    value: {
      image: shoeImg.src,
      paragraph: "Smart Watch Black",
      oldPrice: "$187.50",
      newPrice: "250.00",
      itemRating: 3,
      itemRatingCount: 50,
      brand: "Xiaomi",
      soldBy: "The Info Tech ",
      isStockAvailable: true,
      itemImageArray: [mobPic.src, watch.src],
      keyI: 921,
    },
  },
  {
    quantity: 0,
    keyI: 922,
    value: {
      image: mobPic.src,
      paragraph: "Smart Watch Blue",
      oldPrice: "$187.50",
      newPrice: "250.00",
      itemRating: 5,
      itemRatingCount: 50,
      brand: "Xiaomi",
      soldBy: "The Info Tech ",
      isStockAvailable: true,
      itemImageArray: [watch.src, shoeImg.src],
      keyI: 922,
    },
  },
  {
    quantity: 0,
    keyI: 923,
    value: {
      image: watch.src,
      paragraph: "Smart Watch Green",
      oldPrice: "$187.50",
      newPrice: "250.00",
      itemRating: 2,
      itemRatingCount: 50,
      brand: "Xiaomi",
      soldBy: "The Info Tech ",
      isStockAvailable: true,
      itemImageArray: [shoeImg.src, mobPic.src],
      keyI: 923,
    },
  },
  {
    quantity: 0,
    keyI: 924,
    value: {
      image: shoeImg.src,
      paragraph: "Smart Watch Red",
      oldPrice: "$187.50",
      newPrice: "250.00",
      itemRating: 1,
      itemRatingCount: 50,
      brand: "Xiaomi",
      soldBy: "The Info Tech ",
      isStockAvailable: true,
      itemImageArray: [mobPic.src, watch.src],
      keyI: 924,
    },
  },
];
