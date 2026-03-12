import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import headerFlashsale from "./assets/header__f--s.png";
import headerDeals from "./assets/header__d.png";
import headeruser from "./assets/header__u.png";
import headerbuy from "./assets/header__b.png";
import Categorialar from "./components/categorialar/Categorialar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import AllCategories from "./pages/allCategories/AllCategories";
import Zara from "./pages/zara/Zara";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

const header_right_cont = [
  {
    img: headerDeals,
    title: "My Deals",
    col: "#FC7901",
  },
  {
    img: headeruser,
    title: "Sign Up/Sign In",
    col: "#666666",
  },
  {
    img: headerbuy,
    title: "Cart",
    col: "#666666",
  },
];

const categorialar_cont = [
  {
    text: "All Categories",
    to: "/all_categories",
  },
  {
    text: "Premium Fruits",
    to: "/all_categories",
  },
  {
    text: "Home & Kitchen",
    to: "/all_categories",
  },
  {
    text: "Fashion",
    to: "/all_categories",
  },
  {
    text: "Electronics",
    to: "/all_categories",
  },
  {
    text: "Beauty",
    to: "/all_categories",
  },
  {
    text: "Home Improvement",
    to: "/all_categories",
  },
  {
    text: "Sports, Toys & Luggage",
    to: "/all_categories",
  },
];

const categorialar_popup_left = [
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watchs & Accessories",
  "GPS & Navigation",
  "Warable Technology",
];

const categorialar_popup_right = [
  "All ",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watchs & Accessories",
  "GPS & Navigation",
  "Warable Technology",
];

const App = () => {
  return (
    <div className="container">
      <div className="container2">
        <Header
          title="UNITED DEALS"
          flashSale={headerFlashsale}
          rightCont={header_right_cont}
        />
        <Categorialar
          popup_right={categorialar_popup_right}
          cont={categorialar_cont}
          popup_left={categorialar_popup_left}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_categories" element={<AllCategories />} />
          <Route path="/zara" element={<Zara />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
