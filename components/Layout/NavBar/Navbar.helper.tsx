import { BiCart } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { FcManager } from "react-icons/fc";

export const navItemHome = [
  {
    heading: "Super Store",
  },
  {
    heading: "Grocery",
  },
  {
    heading: "Shop V3",
  },
  {
    heading: "Shop V4",
  },
];

export const navItemPages = [
  {
    heading: "Sale Page",
  },
  {
    heading: "Vendor",
  },
  {
    heading: "Shop",
  },
];

export const navItemUserAccount = [
  {
    heading: "Orders",
  },
  {
    heading: "Profile",
  },
  {
    heading: "Address",
  },
  {
    heading: "Support Tickets",
  },
  {
    heading: "Wishlist",
  },
];

export const navItemVender = [
  {
    heading: "Dashboard",
  },
  {
    heading: "Products",
  },
  {
    heading: "Orders",
  },
  {
    heading: "Profile",
  },
];

export const navItemsMobile = [
  { heading: "Home", icon: <AiOutlineHome size="20px" /> },
  { heading: "Category", icon: <BiCart size="20px" /> },
  { heading: "Cart", icon: <MdShoppingCart size="20px" /> },
  { heading: "Account", icon: <FcManager size="20px" /> },
];
