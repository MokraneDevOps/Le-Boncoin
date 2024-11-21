//import packages
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages called with routes
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header user={"Mokrane"} />
      <main>
        <Routes>
          {/* # # # # # # # ROUTE FOR 1 Offer DISPLAY # # # # # # # # # # # #  */}
          <Route path="/oneoffer/:id" element={<OneOffer />} />

          {/* # # # # # # # ROUTE PUBLISH # # # # # # # # # # # #  */}
          <Route path="/publish" element={<Publish />} />

          {/* # # # # # # # ROUTE FOR SIGN UP # # # # # # # # # # # #  */}
          <Route path="/signup" element={<SignUp />} />

          {/* # # # # # # # DEFAULT ROUTE : ALL OFFERS  # # # # # # # # # # # #  */}
          <Route path="/" element={<Offers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;