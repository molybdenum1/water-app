import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";
import Footer from "../../componetns/Footer";
import Header from "../../componetns/Header";
import CardList from "../../componetns/CardList/CardList";
import Sorts from "../../componetns/Sorts";
import Breadcrumbs from "../../componetns/Breadcrumbs";
import { Slider } from "@mui/material";


import "./ProductsPage.css";
import NavBar from "../../componetns/NavBar";

const ProductsPage = () => {
  const [sortBy, setSortBy] = useState('');
  const { filter } = useParams();
  const [products, setProducts] = useState([]);
  // const [productsCopy] = useState(products);
  const [highestPrice, setHighestPrice] = useState(0);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [priceFilterValue, setPriceFilterValue] = useState([0, 0]);

  const handleChangeSortBy = (event) => {
    const { value } =  event.target;
    setSortBy(value);
    if ( value === 'Highest') {
      setProducts(products.sort((a, b) => b.newPrice - a.newPrice));
    }
    if ( value === 'Lowest') {
      setProducts(products.sort((a, b) => a.newPrice - b.newPrice));
    }
  };
  // const [priceFilter, setPriceFilter] = useState([0, 100]); // Изначальные границы фильтра по цене

  const handlePriceValueChange = (event, newValue) => {
    setPriceFilterValue(newValue);
  };

  // const handlePriceValueChange = (event, newValue) => {
  //   setPriceFilterValue(newValue);
  //   console.log(newValue);
  //   const [min, max] = newValue;
  //   console.log(newValue);

  //   setProducts(productsCopy.filter(product => product.newPrice >= min && product.newPrice <= max ))
  // };

  function valuetext(value) {
    return `${value} AED`;
  }

  useEffect(() => {
    const filteredProducts = data.filter((product) => product.type === filter);
    setProducts(filteredProducts);
    setHighestPrice(Math.max(...filteredProducts.map(product => product.newPrice)));
    setLowestPrice(Math.min(...filteredProducts.map(product => product.newPrice)));
    setPriceFilterValue([lowestPrice, highestPrice]);
  }, [filter, highestPrice, lowestPrice]);
  useEffect(() => {
    const filteredProducts = data.filter((product) => product.type === filter && product.newPrice >= priceFilterValue[0] && product.newPrice <= priceFilterValue[1]);
    setProducts(filteredProducts);
  }, [filter, priceFilterValue]);

  return (
    <div>
      <Header />
      <NavBar />
      <Breadcrumbs title="Products"/>
      <div className="cards-wrapper">
        <div className="filters">
          <div className="filters-wrapper">
            <div>
              <h2>FILTER BY</h2>
            </div>
            <div className="price-filter">
              <h3>Price ( AED )</h3>
              <div className="slider">
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={priceFilterValue}
                  onChange={handlePriceValueChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={lowestPrice}
                  max={highestPrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="cards-container">
          <Sorts sortBy={sortBy} handleChangeSortBy={handleChangeSortBy}/>
          <div className="items">
            Total items:{" "}
            {products.length}
          </div>
          <CardList
            products={products}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
