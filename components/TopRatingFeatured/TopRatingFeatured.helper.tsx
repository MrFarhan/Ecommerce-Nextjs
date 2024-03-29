import camera from "../../static/images/topRating/camera-1.png";
import mobile from "../../static/images/topRating/mobile-1.png";
import shoe from "../../static/images/topRating/shoes-2.png";
import watch from "../../static/images/topRating/watch-1.png";
import jimJiko from "../../static/images/featured/jim-and-jiko.png";
import londonBritch from "../../static/images/featured/london-britches.png";


export const TopRating = [
  {
    image: camera,
    paragraph: "Camera",
    price: "250.00",
    itemRating: 3,
  },
  {
    image: shoe,
    paragraph: "Shoe",
    price: "250.00",
    itemRating: 2,
  },
  {
    image: mobile,
    paragraph: "Phone",
    price: "250.00",
    itemRating: 5,
  },
  {
    image: watch,
    paragraph: "Watch",
    price: "250.00",
    itemRating: 1,
  }
];

export const Featured = [
  {
    image: jimJiko,
    paragraph: "Smart Watch Black",
  },
  {
    image: londonBritch,
    paragraph: "Smart Watch Blue",
    oldPrice: "$187.50",
  }
];
