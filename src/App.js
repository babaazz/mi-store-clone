import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import PreNavbar from "./components/prenavbar/prenavbar.component";
import Navbar from "./components/navbar/navbar.component";
import Slider from "./components/slider/slider.component";
import Offers from "./components/offers/offers.component";
import Heading from "./components/Heading/heading.componnet";
import StarProducts from "./components/star-products/star-products.component";
import HotMenu from "./components/hot-menu/hot-menu.component";
import HotAccessories from "./components/hot-accessories/hot-accessories.component";
import ProductReviews from "./components/product-reviews/product-reviews.component";

import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text={"Star Products"} />
      <StarProducts starProducts={data.starProduct} />
      <Heading text={"Hot Accessories"} />
      <HotMenu />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HotAccessories
              category={data.hotAccessories.music}
              cover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              category={data.hotAccessories.music}
              cover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              category={data.hotAccessories.smartDevice}
              cover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              category={data.hotAccessories.home}
              cover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              category={data.hotAccessories.lifeStyle}
              cover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobile"
          element={
            <HotAccessories
              category={data.hotAccessories.mobileAccessories}
              cover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Heading text={"Product Reviews"} />
      <ProductReviews productReviews={data.productReviews} />
    </div>
  );
}

export default App;
