import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PreNavbar from "./components/prenavbar/prenavbar.component";
import Navbar from "./components/navbar/navbar.component";
import Slider from "./components/slider/slider.component";
import Offers from "./components/offers/offers.component";

import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
    </div>
  );
}

export default App;
