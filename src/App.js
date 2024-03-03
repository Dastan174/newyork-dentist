import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home";
import Clinic from "./components/Info Clinic/Clinic";
import Partners from "./components/Partners/Partners";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Services />
      <Doctors />
      <Clinic />
      <Partners />
      <Reviews />
    </div>
  );
}

export default App;
