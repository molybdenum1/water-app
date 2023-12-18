import { useState } from "react";
import data from "../../data";

import Banner from "../../componetns/Banner";
import BrandsList from "../../componetns/BrandsList";
import Header from "../../componetns/Header";
import NavBar from "../../componetns/NavBar";
import SpecialPropose from "../../componetns/SpecialPropose";
import Footer from "../../componetns/Footer";
import Button from "@mui/material/Button";


import "./MainPage.css";

const MainPage = () => {
  const [products] = useState(data);
  const [isHidden, setIsHidden] = useState(true);

  const showMore = () => {
    setIsHidden(false);
  };

  const maxAmount = isHidden ? 30 : 40;

  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <BrandsList />
      <SpecialPropose products={products.slice(20, maxAmount)} />
      {isHidden && (
        <div className="show-more-btn">
          <Button variant="contained" onClick={showMore}>
            Show more
          </Button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
