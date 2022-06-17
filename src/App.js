import "./App.css";
import PreNavbar from "./components/prenavbar/prenavbar.component";
import Navbar from "./components/navbar/navbar.component";
import Slider from "./components/slider/slider.component";
import data from "./data/data.json";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
    </div>
  );
}

export default App;
